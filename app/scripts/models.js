'use strict';

angular.module('catawikiClientApp')
  .factory('Article', ['Resource', '$cookies', function($resource, $cookies) {
    return $resource('/api/articles/:id', {
      auth_token: $cookies.get('auth_token'),
      id: '@id'
    });
  }]);
