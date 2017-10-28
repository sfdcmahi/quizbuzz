(function () {
    'use strict';

    angular.module('quizbuzz')
        .directive('quizCard', quizcardf);

    function quizcardf() {
      return {
               restrict: 'EA',
               templateUrl: 'views/quizcard.html'
           };
    }
}());
