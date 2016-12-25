var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
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
		playlists: [{ type: String }]	// playlist IDs
	},
	auth: {
		oauth: { type: String, required: true }
	}
});