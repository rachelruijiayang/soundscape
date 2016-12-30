var bodyparser = require('body-parser');
var express = require("express");
var status = require("http-status");

module.exports = function(wagner) {
  var api = express.Router();

  api.use(bodyparser.json());
  
  /*************** create the users above ***************/
  // Create (POST)
  api.post("/signup", wagner.invoke(function(User) {
    return function(req, res) {
      console.log("Got a POST request for a user");
      console.log(JSON.stringify(req.body));
      var newuser = new User(req.body);
      newuser.save(handleOne.bind(null, "newuser", res));
    };
  }));
  
  /*************** read ***************/
  // list all users
  api.get("/allusers", wagner.invoke(function(User) {
    return function(req, res) {
      console.log("Got a GET request for a list of all users");
      User.find({},handleMany.bind(null, "allusers", res));
    };
  }));

  // route that gets info about a specified user
  api.get("/user/:user", wagner.invoke(function(User) {
    return function(req, res) {
      console.log("Got a GET request for the prof of user " + req.params.user + ".");
      User.findOne({ "prof.username": req.params.user },
        handleOne.bind(null, 'user', res));
    };
  }));

  /*************** edit a user ***************/
  // edit user metadata
  api.put("/user/:user/edit", wagner.invoke(function(User) {
    return function(req, res) {
      console.log("Got a PUT request for user " + req.params.user + ".");
      User.findOneAndUpdate({ "prof.username": req.params.user }, { "prof.picture": req.body.picture, 
        "prof.bio": req.body.bio }, {}, function(err, updatedUser) {
        if (err) {
          return res.status(status.INTERNAL_SERVER_ERROR);
        }
        return res.json(updatedUser);
        });
    };
  }));

  /*************** delete a user ***************/
  api.delete("/user/:user/edit", wagner.invoke(function(User) {
    return function(req, res) {
      console.log("Got a DELETE request for user " + req.params.user + ".");
      User.remove({ "prof.username": req.params.user }, function(err) {
        res.send((err == null) ? { msg: "" } : { msg: err });
      });
    };
  }));

  /*****************************************************************************
  ******************************* PLAYLIST LEVEL *******************************
  ******************************************************************************/
  
  /*************** create a playlist ***************/
  // http://stackoverflow.com/questions/18884840/adding-a-new-array-element-to-a-json-object
  api.put("/user/:user/create_playlist", wagner.invoke(function(User) {
    return function(req, res) {
      console.log("Got a POST request from user " + req.params.user + " to create a new playlist.");
      User.findOneAndUpdate(
        { "prof.username": req.params.user },
        { $push: {"prof.playlists" : req.body.newPlaylist }},
        {},
        function(err, updatedUser) {
        if (err) {
          return res.status(status.INTERNAL_SERVER_ERROR);
        }
        return res.json(updatedUser.prof.playlists);
      });
    };
  }));

  /*************** read a playlist ***************/
  // read a specific user's playlist
  api.get("/user/:user/playlist/:playlist_id", wagner.invoke(function(User) {
    return function(req, res) {
      console.log("Got a GET request for user " + req.params.user + "'s playlist " +
        req.params.playlist_id);
      // find the user whose playlists array contains a playlist with the title req.params.playlist_id
      User.find({ "prof.username": req.params.user }).
           where("prof.playlists.playlist_id").equals(req.params.playlist_id). 
           exec(function(err, resUser) {
            if (err) {
              return res.status(status.INTERNAL_SERVER_ERROR);
            }
            for (var i = 0; i < resUser[0].prof.playlists.length; i++) {
              console.log(resUser[0].prof.playlists[i].playlist_id);
              console.log("req.params.playlist_id = " + req.params.playlist_id);
              if ((resUser[0].prof.playlists[i].playlist_id) == req.params.playlist_id) {
                console.log("found playlist that matches " + req.params.playlist_id);
                return res.json(resUser[0].prof.playlists[i]);
              } else {
                console.log("failed to find matching playlist");
              }
            }
           });
    };
  }));

  // read all playlists
  /*
  api.get("/allplaylists", function(req, res) {
    res.send("Got a GET request for all playlists");
  });
  */
  /*************** edit a playlist ***************/
  // edit playlist metadata
  api.put("/user/:user/playlist/:playlist_id/edit", wagner.invoke(function(User) {
    return function(req, res) {
      console.log("Got a PUT request for user " + req.params.user + "'s playlist " +
        req.params.playlist_id);
      User.update(
        {"prof.username": req.params.user, "prof.playlists.playlist_id": req.params.playlist_id}, 
        {$set: {
            "prof.playlists.$.playlist_id": req.body.updatedPlaylist.playlist_id,
            "prof.playlists.$.playlist_title": req.body.updatedPlaylist.playlist_title,
            "prof.playlists.$.playlist_description": req.body.updatedPlaylist.playlist_description,
            "prof.playlists.$.audios": req.body.updatedPlaylist.audios
          }
        },
        function(err, result) {
          if (err) {
            console.log(err);
          }
          else if (!err) {
            console.log(result);
          }
          return res.json(result);
        });
    };
  }));
  
  /*************** delete a playlist ***************/
  /*
  api.put("/user/:user/playlist/:playlist_id/edit", function(req, res) {
    res.send("Got a DELETE request for user " + req.params.user + "'s playlist " +
      req.params.playlist_id);
  });
  */
  /*****************************************************************************
  ******************************** AUDIO LEVEL *********************************
  ******************************************************************************/
  // add a song to a playlist (create)
  /*
  api.post("/user/:user/playlist/:playlist_id/edit", function(req, res) {
    res.send("Got a CREATE request for an audio file in user " + req.params.user + "'s playlist " +
      req.params.playlist_id);
  });
  */
  // open up a song and read its description  (read) - N/A

  // edit song metadata (update)
  /*
  api.put("/user/:user/playlist/:playlist_id/edit", function(req, res) {
    res.send("Got a PUT request for an audio file in user " + req.params.user + "'s playlist " +
      req.params.playlist_id);
  });
  */
  // delete a song from a playlist (delete)
  /*
  api.delete("/user/:user/playlist/:playlist_id/edit", function(req, res) {
    res.send("Got a DELETE request for an audio file in user " + req.params.user + "'s playlist " +
      req.params.playlist_id);
  });
  */

  /* return the Express router so higher-level apps can include the router
  using app.use() */
  return api;

};

function handleOne(property, res, error, result) {
  if (error) {
    return res.
      status(status.INTERNAL_SERVER_ERROR).
      json({ error: error.toString() });
  }
  if (!result) {
    return res.
      status(status.NOT_FOUND).
      json({ error: 'Not found' });
  }

  var json = {};
  json[property] = result;
  res.json(json);
}

function handleMany(property, res, error, result) {
  if (error) {
    return res.
      status(status.INTERNAL_SERVER_ERROR).
      json({ error: error.toString() });
  }

  var json = {};
  json[property] = result;
  res.json(json);
}