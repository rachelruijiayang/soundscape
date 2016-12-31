exports.userProfile = function() {
  return {
    controller: 'UserProfileController',
    templateUrl: '/frontend/templates/user_profile.html'
  };
};

exports.playlistView = function() {
  return {
    controller: 'PlaylistViewController',
    templateUrl: '/frontend/templates/playlist_view.html'
  };
};