var assert = require("assert");
var express = require("express");
var status = require("http-status");
var superagent = require("superagent");
var wagner = require("wagner-core");

var users = [
// user 1: ruijia
{
	profile: {
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
		oauth: "hello1"
	}
},
// user 2: carolyn
{
	profile: {
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
		oauth: "hello2"
	}
}]

models = require("./models")(wagner);
var User = models.User;

User.create(users, function(error) {
	if(error) {
		return handleError(err);
	}
	else {
		console.log("successfully added users");
	}
});