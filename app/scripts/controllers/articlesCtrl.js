'use strict';

angular.module('catawikiClientApp')
  .controller('ArticlesIndexCtrl', ['$scope', '$routeParams', 'Article', function($scope, $routeParams, Article){
    Article.getList().then(function(articles) {
      $scope.articles = articles;
    });

    $scope.delete = function(index) {
      $scope.articles[index].remove().then(function() {
        $scope.articles.splice(index, 1);
      });
    };
  }])

  .controller('ArticlesNewCtrl', ['$scope', '$location', 'Article', function($scope, $location, Article) {
    $scope.submit = function(article) {
      Article.post(article).then(function() {
        $location.url('/articles');
      });
    };
  }])

  .controller('ArticlesShowCtrl', ['$scope', '$routeParams', 'Article', function($scope, $routeParams, Article) {
    Article.get($routeParams.id).then(function(article) {
      $scope.article = article;
    });
  }])

  .controller('ArticlesEditCtrl', ['$scope', '$routeParams', '$location', 'Article', function($scope, $routeParams, $location, Article) {
    Article.get($routeParams.id).then(function(article) {
      $scope.article = article;
    });

    $scope.submit = function(article) {
      article.put().then(function() {
        $location.url('/articles');
      });
    };
  }])

  .controller('ArticleFormCtrl', ['$scope', function($scope) {
    $scope.tinymceOptions = {
      menubar: false
    };
  }]);
