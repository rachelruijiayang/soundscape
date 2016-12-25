var mongoose = require('mongoose');
var Audio = require('./audio');

var playlistSchema = {
	playlist_id: { type: String, required: true },
	playlist_title: { type: String, required: true },
	playlist_audio: [{ type: String }],
	description: { type: String },
	audios: [ Audio.audioSchema ]
};

module.exports = new mongoose.Schema(playlistSchema);
module.exports.playlistSchema = playlistSchema;