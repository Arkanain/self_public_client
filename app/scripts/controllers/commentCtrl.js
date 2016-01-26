'use strict';

angular.module('catawikiClientApp')
  .controller('CommentFormCtrl', ['$scope', function($scope) {
    $scope.tinymceOptions = {
      menubar: false
    };

    $scope.submit_comment = function(comment) {
      $scope.article.all('comments').post(comment).then(function(comments) {
        $scope.article.comments = comments;

        $scope.comment = {};
      });
    };
  }])

  .controller('CommentIndexCtrl', ['$scope', function($scope) {
    $scope.delete_comment = function(index) {
      var comment = $scope.article.comments[index];

      $scope.article.one('comments', comment.id).remove().then(function() {
        $scope.article.comments.splice(index, 1);
      });
    };
  }]);
