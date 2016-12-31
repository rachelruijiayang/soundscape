/* sends HTTP request to the REST API to get data about a user */
exports.UserProfileController = function($scope, $routeParams, $http) {
  // routeParams service = map from route parameters in the AngularJS 
  // URL to the route parameter values
  var encoded = encodeURIComponent($routeParams.user);

  // UserProfileController takes the username from the routeParams service
  // and makes an HTTP request for the user profile
  $http.
    get("/api/user/" + encoded).
    success(function(data) {
      console.log("success");
      $scope.user = data.user;
      console.log(data.user);
    });

  setTimeout(function() {
    $scope.$emit('UserProfileController');
  }, 0);
};

/* sends HTTP request to the REST API to get data about a playlist */
exports.PlaylistViewController = function($scope, $routeParams, $http) {
  console.log($routeParams);
  // routeParams service = map from route parameters in the AngularJS 
  // URL to the route parameter values
  var encodedUser = encodeURIComponent($routeParams.user);
  var encodedPlaylist = encodeURIComponent($routeParams.playlist);

  $http.
    get("/api/user/" + encodedUser + "/playlist/" + encodedPlaylist).
    success(function(data) {
      console.log("success");
      console.log(data);
      $scope.playlist = data;

    });

  setTimeout(function() {
    $scope.$emit('PlaylistViewController');
  }, 0);
};
