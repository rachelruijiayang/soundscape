// main entry point for javascript part of soundscape application

var controllers = require('./controllers');
var directives = require('./directives');
var services = require('./services');
var _ = require('underscore');


// Components
var components = angular.module('soundscape.components', ['ng']);

_.each(controllers, function(controller, name) {
  components.controller(name, controller);
});

_.each(directives, function(directive, name) {
  components.directive(name, directive);
});

_.each(services, function(factory, name) {
  components.factory(name, factory);
});


// Routing
var app = angular.module('soundscape', ['soundscape.components', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.
    when("/user/:user", {
      template: '<user-profile></user-profile>'
    }).
    /*
    when("/user/:user/playlist/:playlist", {
    	template: "<playlist-view></playlist-view>"
    });
*/
});
