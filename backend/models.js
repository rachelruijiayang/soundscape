var mongoose = require('mongoose');
var _ = require('underscore');
var database = require("../../resources/database.js");

module.exports = function(wagner) {
  mongoose.connect(database.productionUrl);

  var User =
    mongoose.model('User', require('./user'), 'soundscapeusers');

  var models = {
    User: User
  };

  // To ensure DRY-ness, register Wagner factories in a loop
  _.each(models, function(value, key) {
    wagner.factory(key, function() {
      return value;
    });
  });

  return models;
};

/* Wagner acesses User model using the invoke() function. invoke(),
when its callback function is implemented in server.js, has Wagner
create the database object for you, and then does the Express 
route handler work in the callback */