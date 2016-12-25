var bodyparser = require('body-parser');
var express = require('express');
var status = require('http-status');

module.exports = function(wagner) {
  var api = express.Router();

  /* attach a body-parser instance that parses json
  before any of the route handlers run, the body parser
  parses json from the HTTP request body, and exposes
  the parsed data to the route handlers as the req.body
  property */
  api.use(bodyparser.json());

  /********* AUDIO API *********/

  // Create
  

  // Read

  // Update

  // Delete

  /********* PLAYLIST API *********/

  // Create

  // Read

  // Update

  // Delete

  /********* USER API *********/

  // Create

  // Read
  api.get('/user/:username', wagner.invoke(function(User) {
  	return function(req, res) {
  		User.findOne({ _username: req.params.username }, function(error, 
  			user) {
  			if (error) {
  				return res.
  					status(status.INTERNAL_SERVER_ERROR).
  					json({ error: error.toString() });
  			}
  			if (!user) {
  				return res.
  					status(status.NOT_FOUND).
  					json({ error: 'Not found' });
  			}
  			/* send back the returned user as json */
  			res.json({ user: user })
  		});
  	};
  }));

  // Update

  // Delete

  /* return the Express router so higher-level apps can include the router
  using app.use() */
  return api;
};