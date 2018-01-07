/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.menu', [])
.controller('menuController',
		function($scope,categoryService,$window,) { 
	$scope.getAllCategories = function(){
		var allCategories = categoryService.getAll()
	  	allCategories.then(function(data){
	  		$scope.menus = data.data;
	  	})
	};
	$scope.getAllCategories();
	  	$scope.$on('refreshMenu', function(e) {  
	  		$scope.getAllCategories();
	    });
});