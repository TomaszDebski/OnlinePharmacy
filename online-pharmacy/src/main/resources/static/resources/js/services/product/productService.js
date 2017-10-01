/**
 * 
 */

angular.module('app.service.product', [])
.factory("productService", ['$resource', function($resource) {
	return  $resource('api/product/:id', {id : "@id"},
			{ 
		'query':  {method:'GET', isArray:true},
		'update' :{method: "PUT"} 
		  })
}]);