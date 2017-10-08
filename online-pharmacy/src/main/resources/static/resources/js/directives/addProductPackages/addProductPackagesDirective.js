/**
 * 
 */
angular.module('app.directive.addProductPackages', ['ngSanitize'])
.directive("addProductPackagesDirective", function($compile,$filter){
	 var controller = ['$scope', function ($scope) {

     }];
	return {
	    restrict: 'E',
	    transclude : true,
	    scope: {
//	    	uniqueIdAtr : '@',
//	    	returnFunction: '&',
	    	count : '=',
	    	id: '@',
	    	form : '=',
	    	
	    }, 
	    controller: controller,
	    templateUrl: 'resources/js/directives/addProductPackages/addProductPackages.html',
	    link: {
	    	pre : function postLink(scope, element, attr){
	    		console.log('scope.count',scope.count);
	    		console.log('scope.id',scope.id);
//	    	var myObject = [];
//	    	var uniqueId;
//	    	scope.curr = new Date();
//	    	scope.month = ('0' + (scope.curr.getMonth()+1)).slice(-2);
	    	scope.countPack = $filter('filter')(scope.count, {'id':scope.id})[0]
	    	scope.emitChange = function(){
	    		console.log('emit', scope.countPack);
//	    		scope.returnFunction({interview:scope.country.pain,uniqueId:my}); 
	    	}
	    }
	  }
	}
})
