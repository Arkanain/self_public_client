'use strict';

angular.module('catawikiClientApp')
  .controller('UsersIndexCtrl', ['$scope', '$location', 'User', function($scope, $location, User) {
    if($scope.current_user.role !== 'admin') {
      $location.url('/articles');
    }

    User.getList().then(function(users) {
      $scope.users = users;
    });

    $scope.delete = function(index) {
      $scope.users[index].remove().then(function() {
        $scope.users.splice(index, 1);
      });
    };
  }])

  .controller('UsersNewCtrl', ['$scope', '$location', 'User', function($scope, $location, User) {
    $scope.password_required = 'true';

    $scope.submit = function(user) {
      User.post(user).then(function() {
        $location.url('/users');
      });
    };
  }])

  .controller('UsersShowCtrl', ['$scope', '$routeParams', 'User', function($scope, $routeParams, User) {
    User.get($routeParams.id).then(function(user) {
      $scope.user = user;
    });
  }])

  .controller('UsersEditCtrl', ['$scope', '$routeParams', '$location', 'User', function($scope, $routeParams, $location, User) {
    User.get($routeParams.id).then(function(user) {
      $scope.user = user;
    });

    $scope.password_required = 'false';

    $scope.submit = function(user) {
      user.put().then(function() {
        $location.url('/users');
      });
    };
  }])

  .controller('UsersFormCtrl', ['$scope', function($scope) {
    $scope.roles = [
      { value: 'admin', name: 'Admin' },
      { value: 'writer', name: 'Writer'}
    ];
  }]);
