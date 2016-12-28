var bodyparser = require("body-parser");
var express = require("express");
var status = require("http-status");

module.exports = function(wagner) {
  var api = express.Router();

  /* attach a body-parser instance that parses json
  before any of the route handlers run, the body parser
  parses json from the HTTP request body, and exposes
  the parsed data to the route handlers as the req.body
  property */
  api.use(bodyparser.json());

  /*****************************************************************************
  ********************************* USER LEVEL *********************************
  ******************************************************************************/
  
  /*************** create the users above ***************/
  // Create (POST)
  api.post("/signup", function(req, res) {
    res.send("Got a POST request for a user");
  });

  /*************** read ***************/
  // list all users
  api.get("/allusers", function(req, res) {
    res.send("Got a GET request for a list of all users");
  });

  // list a specified user
  api.get("/user/:user", function(req, res) {
    res.send("Got a GET request for the profile of user " + req.params.user + ".");
  });

  /*************** edit a user ***************/
  // edit user metadata
  api.put("/user/:user/edit", function(req, res) {
    res.send("Got a PUT request for user " + req.params.user + ".");
  });

  /*************** delete a user ***************/
  api.delete("/user/:user/edit", function(req, res) {
    res.send("Got a DELETE request for user " + req.params.user + ".");
  });

  /*****************************************************************************
  ******************************* PLAYLIST LEVEL *******************************
  ******************************************************************************/
  
  /*************** create a playlist ***************/
  api.post("/user/:user/create_playlist", function(req, res) {
    res.send("Got a POST request from user " + req.params.user + "to create a new playlist.");
  });

  /*************** read a playlist ***************/
  // read a specific user's playlist
  api.get("/user/:user/playlist/:playlist_title", function(req, res) {
    res.send("Got a GET request for user " + req.params.user + "'s playlist " +
      req.params.playlist_title);
  });

  // read all playlists
  api.get("/allplaylists", function(req, res) {
    res.send("Got a GET request for all playlists");
  });

  /*************** edit a playlist ***************/
  // edit playlist metadata
  api.put("/user/:user/playlist/:playlist_title/edit", function(req, res) {
    res.send("Got a PUT request for user " + req.params.user + "'s playlist " +
      req.params.playlist_title);
  });

  /*************** delete a playlist ***************/
  api.put("/user/:user/playlist/:playlist_title/edit", function(req, res) {
    res.send("Got a DELETE request for user " + req.params.user + "'s playlist " +
      req.params.playlist_title);
  });

  /*****************************************************************************
  ******************************** AUDIO LEVEL *********************************
  ******************************************************************************/
  // add a song to a playlist (create)
  api.post("/user/:user/playlist/:playlist_title/edit", function(req, res) {
    res.send("Got a CREATE request for an audio file in user " + req.params.user + "'s playlist " +
      req.params.playlist_title);
  });

  // open up a song and read its description  (read) - N/A

  // edit song metadata (update)
  api.put("/user/:user/playlist/:playlist_title/edit", function(req, res) {
    res.send("Got a PUT request for an audio file in user " + req.params.user + "'s playlist " +
      req.params.playlist_title);
  });

  // delete a song from a playlist (delete)
  api.delete("/user/:user/playlist/:playlist_title/edit", function(req, res) {
    res.send("Got a DELETE request for an audio file in user " + req.params.user + "'s playlist " +
      req.params.playlist_title);
  });

  /* return the Express router so higher-level apps can include the router
  using api.use() */
  return api;
};