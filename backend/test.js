var assert = require("assert");
var express = require("express");
var status = require("http-status");
var superagent = require("superagent");
var wagner = require("wagner-core");

var URL_ROOT = "http://localhost:3000/";

describe("User API", function() {
	var server;
	var User;

	before(function() {
		var app = express();

		// Bootstrap server
		models = require("./models")(wagner);
		app.use(require("./api")(wagner));

		server = app.listen(3000);
	    
	    // Make User model available in tests
	    User = models.User;
	});

	after(function() {
		// Shut the server down when we're done
		server.close();
	});

	beforeEach(function(done) {
		// Make sure users are empty before each test
		User.remove({}, function(error) {
			assert.ifError(error);
			done();
		});
	});

	beforeEach(function(done) {
		/* initialize test users */
		var users = [
		// user 1: ruijia
		{
			prof: {
				username: "ruijia",
				picture: "http://pbs.twimg.com/profile_images/550304223036854272/Wwmwuh2t.png",
				bio: "Hi, I like music!",
				playlists: [
				{
					playlist_title: "chinese songs",
					playlist_description: "a collection of chinese songs",
					audios: 
					[{
						audio_title: "yi sheng you ni",
						audio_file: "http://wavgy.yt-downloader.org/download.php?id=b40d3789ad4040c6badc471f440c9c00",
						location: {
							lat: 40.0,
							lon: -74.0
						},
						audio_description: "yi sheng you ni is a chinese song"
					},
					{
						audio_title: "guang yin de gu shi",
						audio_file: "http://wavgy.yt-downloader.org/download.php?id=b40d3789ad4040c6badc471f440c9c00",
						location: {
							lat: 41.0,
							lon: -75.0
						},
						audio_description: "this is also the name of a TV show"
					}]
				},
				{
					playlist_title: "nyc songs",
					playlist_description: "around the big apple",
					audios: 
					[{
						audio_title: "a-punk",
						audio_file: "http://wavgy.yt-downloader.org/download.php?id=b40d3789ad4040c6badc471f440c9c00",
						location: {
							lat: 42.4,
							lon: -74.0
						},
						audio_description: ""
					},
					{
						audio_title: "empire state of mind",
						audio_file: "http://wavgy.yt-downloader.org/download.php?id=b40d3789ad4040c6badc471f440c9c00",
						location: {
							lat: 41.0,
							lon: -75.0
						},
						audio_description: ""
					}]
				}]
			},
			auth: {
				oauth: "invalid"
			}
		},
		// user 2: carolyn
		{
			prof: {
				username: "carolyn",
				picture: "http://media.istockphoto.com/photos/portrait-of-a-young-chinese-girl-picture-id599888980",
				bio: "i am carolyn yang",
				playlists: [
				{
					playlist_title: "carolyn playlist 1",
					playlist_description: "this is carolyn's playlist 1",
					audios: 
					[{
						audio_title: "piazza1",
						audio_file: "http://wavgy.yt-downloader.org/download.php?id=b40d3789ad4040c6badc471f440c9c00",
						location: {
							lat: 42.0,
							lon: -72.0
						},
						audio_description: "description for piazza1"
					},
					{
						audio_title: "piazza2",
						audio_file: "http://wavgy.yt-downloader.org/download.php?id=b40d3789ad4040c6badc471f440c9c00",
						location: {
							lat: 41.3,
							lon: -75.4
						},
						audio_description: "description for piazza2"
					}]
				}]
			},
			auth: {
				oauth: "invalid"
			}
		}]

		User.create(users, function(error) {
			assert.ifError(error);
			done();
		});
	});

	after(function() {
		server.close();
	});

	
	/*****************************************************************************
	********************************* USER LEVEL *********************************
	******************************************************************************/
	
	/*************** create the users above ***************/
	

	/*************** read ***************/
	// list all users


	// list a specified user

	/*************** edit a user ***************/
	// edit user metadata

	/*************** delete a user ***************/


	/*****************************************************************************
	******************************* PLAYLIST LEVEL *******************************
	******************************************************************************/
	
	/*************** create a playlist ***************/

	/*************** read a playlist ***************/
	// read a specific user's playlist

	// read all playlists

	/*************** edit a playlist ***************/
	// edit playlist metadata

	/*************** delete a playlist ***************/


	/*****************************************************************************
	******************************** AUDIO LEVEL *********************************
	******************************************************************************/
	// add a song to a playlist (create)

	// open up a song and read its description  (read)

	// edit song metadata (update)

	// delete a song from a playlist (delete)

});