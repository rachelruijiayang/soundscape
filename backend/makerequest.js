var request = require('request');
/* 
// CREATE NEW USER
request.post(
    'http://localhost:3000/signup',
    { json: {
	prof: {
		username: "juliana",
		picture: "http://stockfresh.com/files/p/pressmaster/m/42/103752_stock-photo-happy-winner.jpg",
		bio: "Hi, my name is juliana!",
		playlists: [
		{
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
			playlist_title: "nyc songs",
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
*/

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