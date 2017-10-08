/**
 * 
 */

angular.module('app.service.categoryResource', [])
.factory("categoryResourceService", ['$resource', function($resource) {
	return  $resource('api/category/:id', {id : "@id"},
			{ 
		'query':  {method:'GET', isArray:true},
		'update' :{method: "PUT"} 
		  })
}]);