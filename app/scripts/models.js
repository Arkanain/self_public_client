'use strict';

angular.module('catawikiClientApp')
  .config(function(RestangularProvider) {
    var url = '/api';
    var myHerokuApiUrl = 'http://self-publisher.herokuapp.com';

    if(window.location.hostname !== 'localhost') {
      url = myHerokuApiUrl + url;
    }

    RestangularProvider.setBaseUrl(url);
  })

  .run(['Restangular', '$cookies', function(Restangular, $cookies){
    Restangular.setDefaultRequestParams({
      auth_token: $cookies.get('auth_token')
    });
  }])

  .factory('Session', ['Restangular', function(Restangular) {
    return Restangular.all('sessions');
  }])

  .factory('Article', ['Restangular', function(Restangular) {
    return Restangular.all('articles');
  }])

  .factory('User', ['Restangular', function(Restangular) {
    var user = Restangular.all('users');

    user.current_user = function() {
      return user.customGET('current_user');
    };

    return user;
  }]);
