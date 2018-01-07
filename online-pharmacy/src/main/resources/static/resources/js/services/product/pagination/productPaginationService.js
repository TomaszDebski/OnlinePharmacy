/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.service.productPagination',[])
    .factory('productPaginationService',['$http', function($http, $rootScope) {
    	return {
    	    getProductByCategory: function(page,size,name) {
    	      return $http.get('api/product/pagination?page=' + page+'&size=' +size+ '&categoryName='+ name)
    	      .then(function(result){
    	    	  	return result.data;
    	      	})
    	    }
    	}
}]);