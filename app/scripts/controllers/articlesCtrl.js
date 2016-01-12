'use strict';

angular.module('catawikiClientApp')
  .controller('ArticlesIndexCtrl', ['$scope', '$routeParams', 'Article', function($scope, $routeParams, Article){
    $scope.articles = Article.query();

    $scope.delete = function(index) {
      $scope.articles[index].$delete().then(function(response) {
        $scope.articles.splice(index, 1);
      });
    };
  }])

  .controller('ArticlesNewCtrl', ['$scope', 'Article', function($scope, Article) {
    $scope.article = new Article();
  }])

  .controller('ArticlesShowCtrl', ['$scope', '$routeParams', 'Article', function($scope, $routeParams, Article) {
    $scope.article = Article.get({
      id: $routeParams.id
    });
  }])

  .controller('ArticlesEditCtrl', ['$scope', '$routeParams', '$location', 'Article', function($scope, $routeParams, $location, Article) {
    $scope.article = Article.get({
      id: $routeParams.id
    });
  }])

  .controller('ArticleFormCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.tinymceOptions = {
      menubar: false
    };

    $scope.submit = function(article) {
      article.$save().then(function(response) {
        $location.url('/articles');
      });
    };
  }]);
