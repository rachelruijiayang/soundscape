var express = require("express");
var status = require("http-status");

module.exports = function(wagner) {
  var api = express.Router();
  
  /*************** create the users above ***************/
  // Create (POST)
  /*
  api.post("/signup", wagner.invoke(function(req, res) {
    res.send("Got a POST request for a user");
  });
  */
  /*************** read ***************/
  // list all users
  /*
  api.get("/allusers", function(req, res) {
    res.send("Got a GET request for a list of all users");
  });
  */

  // route that lists a specified user
  api.get("/user/:uname", wagner.invoke(function(User) {
    return function(req, res) {
      console.log("Got a GET request for the profile of user " + req.params.uname + ".");
      User.find({ "profile.username": req.params.uname }, 
        handleOne.bind(null, 'user', res));
    };
  }));

  /*************** edit a user ***************/
  // edit user metadata
  /*
  api.put("/user/:user/edit", function(req, res) {
    res.send("Got a PUT request for user " + req.params.user + ".");
  });
  */
  /*************** delete a user ***************/
  /*
  api.delete("/user/:user/edit", function(req, res) {
    res.send("Got a DELETE request for user " + req.params.user + ".");
  });
  */
  /*****************************************************************************
  ******************************* PLAYLIST LEVEL *******************************
  ******************************************************************************/
  
  /*************** create a playlist ***************/
  /*
  api.post("/user/:user/create_playlist", function(req, res) {
    res.send("Got a POST request from user " + req.params.user + "to create a new playlist.");
  });
  */
  /*************** read a playlist ***************/
  // read a specific user's playlist
  /*
  api.get("/user/:user/playlist/:playlist_title", function(req, res) {
    res.send("Got a GET request for user " + req.params.user + "'s playlist " +
      req.params.playlist_title);
  });
  */
  // read all playlists
  /*
  api.get("/allplaylists", function(req, res) {
    res.send("Got a GET request for all playlists");
  });
  */
  /*************** edit a playlist ***************/
  // edit playlist metadata
  /*api.put("/user/:user/playlist/:playlist_title/edit", function(req, res) {
    res.send("Got a PUT request for user " + req.params.user + "'s playlist " +
      req.params.playlist_title);
  });
  */
  /*************** delete a playlist ***************/
  /*
  api.put("/user/:user/playlist/:playlist_title/edit", function(req, res) {
    res.send("Got a DELETE request for user " + req.params.user + "'s playlist " +
      req.params.playlist_title);
  });
  */
  /*****************************************************************************
  ******************************** AUDIO LEVEL *********************************
  ******************************************************************************/
  // add a song to a playlist (create)
  /*
  api.post("/user/:user/playlist/:playlist_title/edit", function(req, res) {
    res.send("Got a CREATE request for an audio file in user " + req.params.user + "'s playlist " +
      req.params.playlist_title);
  });
  */
  // open up a song and read its description  (read) - N/A

  // edit song metadata (update)
  /*
  api.put("/user/:user/playlist/:playlist_title/edit", function(req, res) {
    res.send("Got a PUT request for an audio file in user " + req.params.user + "'s playlist " +
      req.params.playlist_title);
  });
  */
  // delete a song from a playlist (delete)
  /*
  api.delete("/user/:user/playlist/:playlist_title/edit", function(req, res) {
    res.send("Got a DELETE request for an audio file in user " + req.params.user + "'s playlist " +
      req.params.playlist_title);
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