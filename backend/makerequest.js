var request = require('request');

// CREATE NEW USER
request.post(
    'http://localhost:3000/signup',
    { json: {
	prof: {
		username: "connie",
		picture: "http://stockfresh.com/files/p/pressmaster/m/42/103752_stock-photo-happy-winner.jpg",
		bio: "Hi, my name is connie!",
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
} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

/*
// EDIT USER
request.put(
    'http://localhost:3000/user/juliana/edit',
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
	'http://localhost:3000/user/juliana/create_playlist',
    { json: {
    	newPlaylist: {
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