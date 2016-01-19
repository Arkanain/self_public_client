'use strict';

angular.module('catawikiClientApp')
  .controller('MainCtrl', ['$scope', '$window', '$cookies', 'User', 'Session', function ($scope, $window, $cookies, User, Session) {
    User.current_user().then(function(response) {
      $scope.current_user = response;

      if(response.role === 'admin' || response.role === 'writer') {
        $scope.can_write = true;
      }
    }).finally(function(){
      $scope.authorized = true;
    });

    $scope.sign_out = function() {
      Session.remove({
        auth_token: $cookies.get('auth_token')
      }).then(function() {
        $window.location.hash = '#/articles';
        $window.location.reload();

        $cookies.remove('auth_token');
      });
    };
  }]);
