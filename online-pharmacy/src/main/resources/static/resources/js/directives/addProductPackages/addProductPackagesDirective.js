/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.directive.addProductPackages', ['ngSanitize'])
.directive("addProductPackagesDirective", function($compile,$filter){
	 var controller = ['$scope', function ($scope) {}];
	return {
	    restrict: 'E',
	    transclude : true,
	    scope: {
	    	count : '=',
	    	id: '@',
	    	form : '=',
	    	
	    }, 
	    controller: controller,
	    templateUrl: 'resources/js/directives/addProductPackages/addProductPackages.html',
	    link: {
	    	pre : function postLink(scope, element, attr){
	    	scope.countPack = $filter('filter')(scope.count, {'id':scope.id})[0]
	    	scope.emitChange = function(){
	    	}
	    }
	  }
	}
})
