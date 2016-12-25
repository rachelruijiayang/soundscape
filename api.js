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

  // Update

  // Delete