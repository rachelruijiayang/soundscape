var express = require('express');

module.exports = function() {
  var app = express();

  
  /*************** create the users above ***************/
  // Create (POST)
  app.post("/signup", function(req, res) {
    res.send("Got a POST request for a user");
  });

  /*************** read ***************/
  // list all users
  app.get("/allusers", function(req, res) {
    res.send("Got a GET request for a list of all users");
  });

  // list a specified user
  app.get("/user/:user", function(req, res) {
    res.send("Got a GET request for the profile of user " + req.params.user + ".");
  });

  /*************** edit a user ***************/
  // edit user metadata
  app.put("/user/:user/edit", function(req, res) {
    res.send("Got a PUT request for user " + req.params.user + ".");
  });

  /*************** delete a user ***************/
  app.delete("/user/:user/edit", function(req, res) {
    res.send("Got a DELETE request for user " + req.params.user + ".");
  });

  /*****************************************************************************
  ******************************* PLAYLIST LEVEL *******************************
  ******************************************************************************/
  
  /*************** create a playlist ***************/
  app.post("/user/:user/create_playlist", function(req, res) {
    res.send("Got a POST request from user " + req.params.user + "to create a new playlist.");
  });

  /*************** read a playlist ***************/
  // read a specific user's playlist
  app.get("/user/:user/playlist/:playlist_title", function(req, res) {
    res.send("Got a GET request for user " + req.params.user + "'s playlist " +
      req.params.playlist_title);
  });

  // read all playlists
  app.get("/allplaylists", function(req, res) {
    res.send("Got a GET request for all playlists");
  });

  /*************** edit a playlist ***************/
  // edit playlist metadata
  app.put("/user/:user/playlist/:playlist_title/edit", function(req, res) {
    res.send("Got a PUT request for user " + req.params.user + "'s playlist " +
      req.params.playlist_title);
  });

  /*************** delete a playlist ***************/
  app.put("/user/:user/playlist/:playlist_title/edit", function(req, res) {
    res.send("Got a DELETE request for user " + req.params.user + "'s playlist " +
      req.params.playlist_title);
  });

  /*****************************************************************************
  ******************************** AUDIO LEVEL *********************************
  ******************************************************************************/
  // add a song to a playlist (create)
  app.post("/user/:user/playlist/:playlist_title/edit", function(req, res) {
    res.send("Got a CREATE request for an audio file in user " + req.params.user + "'s playlist " +
      req.params.playlist_title);
  });

  // open up a song and read its description  (read) - N/A

  // edit song metadata (update)
  app.put("/user/:user/playlist/:playlist_title/edit", function(req, res) {
    res.send("Got a PUT request for an audio file in user " + req.params.user + "'s playlist " +
      req.params.playlist_title);
  });

  // delete a song from a playlist (delete)
  app.delete("/user/:user/playlist/:playlist_title/edit", function(req, res) {
    res.send("Got a DELETE request for an audio file in user " + req.params.user + "'s playlist " +
      req.params.playlist_title);
  });

  /* return the Express router so higher-level apps can include the router
  using app.use() */
  return app;

};