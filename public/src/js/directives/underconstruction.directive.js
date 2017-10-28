(function () {
    'use strict';
angular.module('quizbuzz')
.directive('underContruction',function(){
  return{
    restrict: 'EA',
    template: '<div class="pagecontainer"><div ><img width="95%" height="700px" src="https://cdnd.icons8.com/wp-content/uploads/2015/06/Website-Under-Construction.jpg"/></div></div>'
  }
});
})();
