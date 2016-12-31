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

  $scope.load = function() {
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
  };

  $scope.load();
  
  // haversine formula: http://www.movable-type.co.uk/scripts/latlong.html
  $scope.selectClosestAudio = function() {
    // get current location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(location) {
        var curLat = location.coords.latitude;
        var curLon = location.coords.longitude;
        console.log("lat: " + location.coords.latitude);
        console.log("lon: " + location.coords.longitude);
        console.log("accuracy: " + location.coords.accuracy);

        var minDist = -1;
        var dist = -1;
        var newClosestAudioSrc = null;
        for (var i = 0; i < $scope.playlist.audios.length; i++) {
          iAudio = $scope.playlist.audios[i];
          dist = Math.sqrt(Math.pow((iAudio.location.lat - curLat), 2) + Math.pow((iAudio.location.lon - curLon), 2));
          if (minDist == -1 || dist < minDist) {
            minDist = dist;
            newClosestAudioSrc = iAudio.audio_file;
            console.log("newClosestAudio is " + newClosestAudioSrc );
          }
        }
        if (newClosestAudioSrc != $scope.closestAudioSrc)
          $scope.closestAudioSrc = newClosestAudioSrc;
      });
      console.log("$scope.closestAudioSrc is " + $scope.closestAudioSrc );
    }
  };

  $scope.playSoundscape = function() {
    $scope.selectClosestAudio();
    $scope.closestAudioObject = new Audio($scope.closestAudioSrc);
    curAudioStr = $scope.closestAudioSrc;
    setInterval(function() {
      console.log("re-check audio");
      $scope.selectClosestAudio();
      console.log("next audio is: "+ $scope.closestAudioSrc);
      if (curAudioStr != $scope.closestAudioSrc) {
          curAudioStr = $scope.closestAudioSrc;
          ($scope.closestAudioObject).pause();
          $scope.closestAudioObject = new Audio(curAudioStr);
          ($scope.closestAudioObject).play();
        }
      }, 10000);
    /*
    var nextAudioStr = null;
    $scope.audioSrc = new Audio(curAudioStr); // or keep the same Audio and keep the source? delete old Audio?

    ($scope.audioSrc).play();
    while (1) {
      setTimeout(function() {
        console.out("re-check audio");
        nextAudioStr = $scope.selectClosestAudio();
        if (curAudioStr != nextAudioStr) {
          curAudioStr = nextAudioStr;
          ($scope.audioSrc).pause();
          $scope.audioSrc = new Audio(curAudioStr);
          ($scope.audioSrc).play();
        }
      }, 10000);
    }
    */
  }
  
  setTimeout(function() {
    $scope.$emit('PlaylistViewController');
  }, 0);

};
