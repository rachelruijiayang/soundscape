var express = require('express');

module.exports = function() {

	/* creates an express application */
	var app = express();

	app.get('/', function(req, res) {
		res.send('Soundscape');	// res = response
	});

	/* app.get(path, callback)
	routes HTTP GET requests to the specified path with the specified 
	callback functions
	*/
	app.get('/user/:user/playlist/:playlist', function(req, res) {
		/* req.params.user gives you access to whatever string is in the :user
		portion of the url */
		res.send('You searched in ' + req.params.user + ' for playlist ' + 
			req.params.playlist);
	});

	return app;
};