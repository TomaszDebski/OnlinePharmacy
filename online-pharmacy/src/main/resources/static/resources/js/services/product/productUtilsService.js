/**
 * 
 */

angular.module('app.service.productUtils',[])
    .factory('productUtilsService',['$http', function($http, $rootScope) {
    	return {
    	    getProductsByName: function(name) {
    	      return $http.get('api/product/searchAll?name='+ name)
    	      .then(function(result){
    	    	  	return result.data;
    	      	})
    	    }
    	}
}]);