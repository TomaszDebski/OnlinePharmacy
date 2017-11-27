/**
 * 
 */

angular.module('app.controller.menu', [])
.controller('menuController',
		function($scope,categoryService,$window,) { 
	$scope.getAllCategories = function(){
		var allCategories = categoryService.getAll()
	  	allCategories.then(function(data){
	  		$scope.menus = data.data;
			  console.log('menuController ',data.data);
	  	})
	};
	$scope.getAllCategories();
	  	$scope.$on('refreshMenu', function(e) {  
//	        $scope.$emit("pingBack", $scope.get());        
	  		$scope.getAllCategories();
	    });
//	console.log('menu controller')
//	categoryService.setCategories(categoryResolve);
//	console.log('menu',categoryService.getCategories())
});