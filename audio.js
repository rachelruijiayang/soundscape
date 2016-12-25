var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
	audio_id: { type: String, required: true },
	audio_file: { type: String, match: /^http:\/\//i, required: true },
	location: {
		latitude: { type: Number, required: true },
		longitude: { type: Number, required: true}
	},
	audio_title: { type: String, required: true },
	username: { type: String, required: true },
	description: { type: String }
});