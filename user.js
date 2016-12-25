var mongoose = require('mongoose');
var Playlist = require('./playlist');

var userSchema = {
	profile: {
		username: {
			type: String,
			required: true,
			lowercase: true
		},
		picture: {
			type: String,
			match: /^http:\/\//i
		},
		bio: { type: String },
		playlists: [ Playlist.playlistSchema ]	// playlist IDs
	},
	auth: {
		oauth: { type: String, required: true }
	}
};

module.exports = new mongoose.Schema(userSchema);
module.exports.userSchema = userSchema;