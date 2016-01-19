'use strict';

angular.module('catawikiClientApp')
  .controller('SessionNewCtrl', ['$scope', '$cookies', '$location', '$window', 'Session', function ($scope, $cookies, $location, $window, Session) {
    if($scope.current_user) {
      $location.url('/articles');
    }

    $scope.sign_in = function(user) {
      Session.post(user).then(function(session) {
        $cookies.put('auth_token', session.auth_token);

        $window.location.hash = '#/articles';
        $window.location.reload();
      });
    };
  }]);
