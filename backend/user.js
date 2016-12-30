var mongoose = require("mongoose");

var userSchema = {
	prof: {
		username: { type: String, required: true },
		picture: { type: String, match: /^http:\/\//i },
		bio: { type: String },
		playlists: [{
			playlist_id: { type: String, required: true },
			playlist_title: { type: String, required: true },
			playlist_description: { type: String },
			audios: [{
				audio_title: { type: String, required: true },
				audio_file: { type: String, match: /^http:\/\//i, required: true },
				location: {
					lat: { type: Number, required: true },
					lon: { type: Number, required: true }
				},
				audio_description: { type: String }
			}]
		}]
	},
	auth: {
		oauth: { type: String, required: true }
	}
};

module.exports = new mongoose.Schema(userSchema);
module.exports.userSchema = userSchema;