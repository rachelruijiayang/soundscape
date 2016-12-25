var mongoose = require('mongoose');
var _ = require('underscore');	// functional programming helper

module.exports = function(wagner) {
	mongoose.connect('mongodb://localhost:27017/test');

	var User = mongoose.model('User', require('./user'), 'users');
	var Playlist = mongoose.model('Playlist', require('./playlist'), 'playlists');
	var Audio = mongoose.model('Audio', require('./audio'), 'audios');

	var models = {
		User: User,
		Playlist: Playlist,
		Audio: Audio
	};

	_.each(models, function(value, key) {
		wagner.factory(key, function() {
			return value;
		});
	});

	return models;
};