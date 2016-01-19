'use strict';

angular.module('catawikiClientApp').config(function($routeProvider) {
  $routeProvider
    .when('/sign_in', {
      templateUrl: 'views/sessions/new.html',
      controller: 'SessionNewCtrl'
    })
    .when('/about_us', {
      templateUrl: 'views/about_us/index.html',
      controller: 'AboutUsCtrl'
    })
    .when('/articles', {
      templateUrl: 'views/articles/index.html',
      controller: 'ArticlesIndexCtrl'
    })
    .when('/articles/new', {
      templateUrl: 'views/articles/new.html',
      controller: 'ArticlesNewCtrl'
    })
    .when('/articles/:id', {
      templateUrl: 'views/articles/show.html',
      controller: 'ArticlesShowCtrl'
    })
    .when('/articles/:id/edit', {
      templateUrl: 'views/articles/edit.html',
      controller: 'ArticlesEditCtrl'
    })
    .when('/users', {
      templateUrl: 'views/users/index.html',
      controller: 'UsersIndexCtrl'
    })
    .when('/users/new', {
      templateUrl: 'views/users/new.html',
      controller: 'UsersNewCtrl'
    })
    .when('/users/:id', {
      templateUrl: 'views/users/show.html',
      controller: 'UsersShowCtrl'
    })
    .when('/users/:id/edit', {
      templateUrl: 'views/users/edit.html',
      controller: 'UsersEditCtrl'
    })
    .otherwise({
      redirectTo: '/articles'
    });
});
