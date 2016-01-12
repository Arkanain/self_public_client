'use strict';

angular.module('catawikiClientApp')
  .controller('MainCtrl', ['$scope', '$window', '$cookies', 'User', 'Session', function ($scope, $window, $cookies, User, Session) {
    User.current_user().$promise.then(function(response) {
      $scope.current_user = response;

      if(response.role === 'admin' || response.role === 'writer') {
        $scope.can_write = true;
      }

      $scope.authorized = true;
    }, function(response) {
      $scope.authorized = true;
    });

    $scope.sign_out = function() {
      Session.delete({
        auth_token: $cookies.get('auth_token')
      }).$promise.then(function(response) {
        $window.location.hash = '#/articles';
        $window.location.reload();

        $cookies.remove('auth_token');
      });
    };
  }]);
