/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.service.cartResource', [])
.factory("cartResourceService", ['$resource', function($resource) {
	return  $resource('api/cart/:id', {id : "@id"},
			{ 
		'query':  {method:'GET', isArray:true},
		'update' :{method: "PUT"} 
		  })
}]);