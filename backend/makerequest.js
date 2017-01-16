var request = require('request');

// CREATE NEW USER
request.post(
    'http://localhost:8080/api/signup',
    { json: {
	prof: {
		username: "mozart",
		picture: "http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE1ODA0OTcxNzMyNjY1ODY5.jpg",
		// but the URL https://s-media-cache-ak0.pinimg.com/originals/60/f6/b2/60f6b2b59177878584d427cf9cd7cad0.jpg causes an 
		// internal server error?
		bio: "i am classy",
		playlists: [
		{
			playlist_id: "classical_music",
			playlist_title: "classical music",
			playlist_description: "a playlist for classical music",
			audios: 
			[{
				audio_title: "Arrival of the Queen of Sheba",
				audio_file: "http://www.stephaniequinn.com/Music/Handel%20-%20Entrance%20of%20the%20Queen%20of%20Sheba.mp3",
				location: {
					lat: "41.484044",
					lon: "-73.251855"
				},
				audio_description: "good song!"
			},
			{
				audio_title: "Hungarian Dance - Brahms",
				audio_file: "http://www.stephaniequinn.com/Music/Hungarian%20Dance.mp3",
				location: {
					lat: "41.484060",
					lon: "-73.251818"
				},
				audio_description: ":)"
			},
			{
				audio_title: "Presto - Mozart",
				audio_file: "http://www.stephaniequinn.com/Music/Mozart%20-%20Presto.mp3",
				location: {
					lat: "41.484120",
					lon: "-73.251560"
				},
				audio_description: "good"
			},
			{
				audio_title: "Allegro - Beethoven",
				audio_file: "http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3",
				location: {
					lat: "41.484160",
					lon: "-73.251474"
				},
				audio_description: "beethoven"
			},
			{
				audio_title: "Spring - Vivaldi",
				audio_file: "http://www.stephaniequinn.com/Music/Vivaldi%20-%20Spring%20from%20Four%20Seasons.mp3",
				location: {
					lat: "41.484160",
					lon: "-73.251496"
				},
				audio_description: ":)"
			}
			]
		},
		]
	},
	auth: {
		oauth: "hello1"
	}
	} },

    function (error, response, body) {
    	console.log(response.statusCode);
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

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
/*
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
*/

// DELETE USER PLAYLIST
/*
request.delete(
	"http://localhost:3000/api/user/ruijia/playlist/chinese_songs/edit",
	{ json: {
		toDelete: {
			playlist_id: "nyc_songs",
		}
	}},
	function (error, response, body) {
        console.log(response.statusCode);
        console.log(body);
    }
);
*/