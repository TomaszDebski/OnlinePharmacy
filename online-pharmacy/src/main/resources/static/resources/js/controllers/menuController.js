/**
 * 
 */

angular.module('app.controller.menu', [])
.controller('menuController',
		function($scope,categoryService,$window,) { 
	var aa = categoryService.getAll()
	  	aa.then(function(data){
	  		$scope.menus = data.data;
//			  console.log('menuController ');
	  	})
//	console.log('menu controller')
//	categoryService.setCategories(categoryResolve);
//	console.log('menu',categoryService.getCategories())
});