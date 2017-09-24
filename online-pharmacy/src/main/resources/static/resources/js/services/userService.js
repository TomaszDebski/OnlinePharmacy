/**
 * 
 */

angular.module('app.service.user', [])
.factory("userService", ['$resource', function($resource) {
	return  $resource('api/user/:id', {id : "@id"},
			{ 
		'query':  {method:'GET', isArray:true},
		'update' :{method: "PUT"} 
		  })
}]);