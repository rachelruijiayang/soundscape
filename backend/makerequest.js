var request = require('request');

// CREATE NEW USER
/*
request.post(
    'http://localhost:3000/api/signup',
    { json: {
	prof: {
		username: "jordi",
		picture: "http://canyouactually.com/wp-content/uploads/charlie-snoopy.jpg",
		// but the URL https://s-media-cache-ak0.pinimg.com/originals/60/f6/b2/60f6b2b59177878584d427cf9cd7cad0.jpg causes an 
		// internal server error?
		bio: "It has been said that astronomy is a humbling and character-building experience",
		playlists: [
		{
			playlist_id: "chinese_songs",
			playlist_title: "chinese songs",
			playlist_description: "a collection of chinese songs",
			audios: 
			[{
				audio_title: "yi sheng you ni",
				audio_file: "http://wavgy.yt-downloader.org/download.php?id=b40d3789ad4040c6badc471f440c9c00",
				location: {
					lat: "40.0",
					lon: "-74.0"
				},
				audio_description: "yi sheng you ni is a chinese song"
			},
			{
				audio_title: "guang yin de gu shi",
				audio_file: "http://wavgy.yt-downloader.org/download.php?id=b40d3789ad4040c6badc471f440c9c00",
				location: {
					lat: "41.0",
					lon: "-75.0"
				},
				audio_description: "this is also the name of a TV show"
			}]
		},
		{
			playlist_id: "test_me",
			playlist_title: "test me",
			playlist_description: "around the big apple",
			audios: 
			[{
				audio_title: "a-punk",
				audio_file: "http://wavgy.yt-downloader.org/download.php?id=b40d3789ad4040c6badc471f440c9c00",
				location: {
					lat: "42.4",
					lon: "-74.0"
				},
				audio_description: ""
			},
			{
				audio_title: "empire state of mind",
				audio_file: "http://wavgy.yt-downloader.org/download.php?id=b40d3789ad4040c6badc471f440c9c00",
				location: {
					lat: "41.0",
					lon: "-75.0"
				},
				audio_description: ""
			}]
		}]
	},
	auth: {
		oauth: "hello1"
	}
	} }
    function (error, response, body) {
    	console.log(response.statusCode);
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);
*/

/*
// EDIT USER
request.put(
    'http://localhost:3000/api/user/juliana/edit',
    { json: {
		picture: "http://stockfresh.com/files/p/pressmaster/m/42/103752_stock-photo-happy-winner.jpg",
		bio: "even newer bio",
	} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);
*/

// ADD NEW PLAYLIST TO USER
/*
request.put(
	'http://localhost:3000/api/user/juliana/create_playlist',
    { json: {
    	newPlaylist: {
    		playlist_id: "love_songs_2"
			playlist_title: "love songs #2",
			playlist_description: "for when you're missing someone",
			audios: 
			[{
				audio_title: "to love somebody - the bee gees",
				audio_file: "http://wavgy.yt-downloader.org/download.php?id=b40d3789ad4040c6badc471f440c9c00",
				location: {
					lat: "43.4",
					lon: "-74.0"
				},
				audio_description: "good song"
			},
			{
				audio_title: "i'm yours - jason mraz",
				audio_file: "http://wavgy.yt-downloader.org/download.php?id=b40d3789ad4040c6badc471f440c9c00",
				location: {
					lat: "41.0",
					lon: "-75.0"
				},
				audio_description: ""
			}]
		}
	} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);
*/

// EDIT USER PLAYLIST
request.put(
	"http://localhost:3000/api/user/ruijia/playlist/nyc_songs/edit",
	{ json: {
		updatedPlaylist: {
			playlist_id: "nyc_songs",
			playlist_title: "nyc songs",
			playlist_description: "last new descrip",
			audios: [{
				audio_title: "new york new york",
				audio_file: "www.google.com",
				location: {
					lat: "41",
					lon: "-20"
				},
				audio_description: "an ok song"
			}]

		}
	}},
	function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
        console.log("done");
    }
);