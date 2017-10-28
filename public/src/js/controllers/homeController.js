angular.module('quizbuzz')
.controller('HomeCtrl', [
    '$scope',
    function($scope) {
        console.log('Loaded.');
        $scope.message = 'Hello World Test';
    }
]);
