var mongoose = require('mongoose');

var audioSchema = {
	audio_id: { type: String, required: true },
	audio_file: { type: String, match: /^http:\/\//i, required: true },
	location: {
		latitude: { type: Number, required: true },
		longitude: { type: Number, required: true}
	},
	audio_title: { type: String, required: true },
	description: { type: String },
};

module.exports = new mongoose.Schema(audioSchema);
module.exports.audioSchema = audioSchema;