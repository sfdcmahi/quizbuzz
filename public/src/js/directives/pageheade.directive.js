(function () {
    'use strict';

    angular.module('quizbuzz')
        .directive('pageHeader', pageheader);

    function pageheader() {
      return {
               restrict: 'EA',
               templateUrl: 'views/pageheader.html'
           };
    }
}());
