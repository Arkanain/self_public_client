'use strict';

function Person(json) {
  angular.extend(this, json);
}

// Object methods
Person.prototype = {
  update: function(newName) {
    this.name = newName;
  }
};

// Class methods
Person.getPerson = function() {
  return new Person({
    name: 'Steve'
  });
};

angular.module('catawikiClientApp')
  .factory('personServise', function() {
    return {
      getPerson: Person.getPerson
    };
  })

  .provider('textObserver', function() {
    var text = 'Text';
    var number = 3;

    return {
      // For config part
      setText: function(newText) {
        text = newText;
      },

      // For controller part
      $get: function() {
        function getText() {
          return text;
        }

        function getNumber() {
          return number;
        }

        return {
          getText: getText,
          getNumber: getNumber
        };
      }
    };
  })

  .config(function(textObserverProvider) {
    textObserverProvider.setText('Default Text');
  })

  .config(function($provide) {
    $provide.decorator('textObserver', function($delegate) {
      $delegate.concatString = function() {
        return this.getNumber() + ' - ' + this.getText();
      };

      return $delegate;
    });
  })

  .service('foo', function() {
    var text = 'private';

    this.variable = 'public';
    this.getPrivate = function() {
      return text;
    };
  });
