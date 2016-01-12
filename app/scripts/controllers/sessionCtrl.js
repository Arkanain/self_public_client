'use strict';

angular.module('catawikiClientApp')
  .controller('SessionNewCtrl', ['$scope', '$cookies', '$location', '$window', 'Session', function ($scope, $cookies, $location, $window, Session) {
    if($scope.current_user) {
      $location.url('/articles');
    }

    $scope.user = { email: '', password: '' };

    $scope.sign_in = function(user) {
      Session.save(user).$promise.then(function(response) {
        $cookies.put('auth_token', response.auth_token);
        $window.location.hash = '#/articles';
        $window.location.reload();
      });
    };
  }]);
