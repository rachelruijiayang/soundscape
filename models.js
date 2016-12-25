var mongoose = require("mongoose");
var _ = require("underscore");	// functional programming helper

module.exports = function(wagner) {
	mongoose.connect("mongodb://localhost:27017/test");

	/* create Mongoose model by including the schema */
	var User = mongoose.model("User", require("./user"), "users");

	var models = {
		User: User,
	};

	_.each(models, function(value, key) {
		wagner.factory(key, function() {
			return value;
		});
	});

	return models;
};