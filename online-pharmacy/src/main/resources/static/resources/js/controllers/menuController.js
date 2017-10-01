/**
 * 
 */

angular.module('app.controller.menu', [])
.controller('menuController',
		function($scope,categoryService) { 
	var aa = categoryService.getAll()
	  	aa.then(function(data){
	  		$scope.menus = data.data;
//			  console.log('data ',data.data);
	  	})
//	console.log('menu controller')
});