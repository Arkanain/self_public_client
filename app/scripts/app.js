'use strict';

angular.module('catawikiClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mm.foundation',
    'ui.tinymce'
  ])

  .factory('Resource', [ '$resource', function( $resource ) {
    return function( url, params, methods ) {
      var defaults = {
        update: { method: 'PUT' },
        create: { method: 'POST' }
      };

      methods = angular.extend( defaults, methods );

      var resource = $resource( url, params, methods );

      resource.prototype.$save = function() {
        if (this.id) {
          return this.$update();
        }
        else {
          return this.$create();
        }
      };

      return resource;
    };
  }]);
