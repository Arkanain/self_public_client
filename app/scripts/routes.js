'use strict';

angular.module('catawikiClientApp').config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl'
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
    .otherwise({
      redirectTo: '/'
    });
});
