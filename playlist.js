var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
	playlist_id: { type: String, required: true },
	playlist_title: { type: String, required: true },
	playlist_audio: [{ type: String }],
	username: { type: String, required: true },
	description: { type: String }
});