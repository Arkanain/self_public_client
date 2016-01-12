'use strict';

angular.module('catawikiClientApp')
  .factory('Session', ['Resource', '$cookies', function($resource, $cookies) {
    return $resource('/api/sessions');
  }])

  .factory('Article', ['Resource', '$cookies', function($resource, $cookies) {
    return $resource('/api/articles/:id', {
      auth_token: $cookies.get('auth_token'),
      id: '@id'
    });
  }])

  .factory('User', ['Resource', '$cookies', function($resource, $cookies) {
    return $resource('/api/users/:id', {
      auth_token: $cookies.get('auth_token'),
      id: '@id'
    }, {
      current_user: { method: 'GET', url: '/api/users/current_user' }
    });
  }]);
