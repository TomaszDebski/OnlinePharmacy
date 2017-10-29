/**
 * 
 */

angular.module('app.service.productPagination',[])
    .factory('productPaginationService',['$http', function($http, $rootScope) {
    	return {
    	    getProductByCategory: function(page,size,name) {
//    	    	if (angular.isObject(startDate)){
//    	    		startDate = Date.parse(startDate);
//    	    	}
//    	    	var url = "startDate=" + startDate + '&endDate=' + Date.parse(endDate);
    	      return $http.get('api/product/pagination?page=' + page+'&size=' +size+ '&categoryName='+ name)
    	      .then(function(result){
    	    	  	return result.data;
    	      	})
    	    }
    	}
}]);