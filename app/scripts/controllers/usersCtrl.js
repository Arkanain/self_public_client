'use strict';

angular.module('catawikiClientApp')
  .controller('UsersIndexCtrl', ['$scope', '$location', 'User', function($scope, $location, User) {
    if($scope.current_user.role !== 'admin') {
      $location.url('/articles');
    }

    $scope.users = User.query();

    $scope.delete = function(index) {
      $scope.users[index].$delete().then(function(response) {
        $scope.users.splice(index, 1);
      });
    };
  }])

  .controller('UsersNewCtrl', ['$scope', 'User', function($scope, User) {
    $scope.user = new User();
    $scope.password_required = 'true';
  }])

  .controller('UsersShowCtrl', ['$scope', '$routeParams', 'User', function($scope, $routeParams, User) {
    $scope.user = User.get({
      id: $routeParams.id
    });
  }])

  .controller('UsersEditCtrl', ['$scope', '$routeParams', '$location', 'User', function($scope, $routeParams, $location, User) {
    $scope.user = User.get({
      id: $routeParams.id
    });

    $scope.password_required = 'false';
  }])

  .controller('UsersFormCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.roles = [
      { value: 'admin', name: 'Admin' },
      { value: 'writer', name: 'Writer'}
    ];

    $scope.submit = function(user) {
      user.$save().then(function(response) {
        $location.url('/users');
      });
    };
  }]);
