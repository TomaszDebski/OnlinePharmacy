/**
 * 
 */

angular.module('app.service.cartPagination',[])
    .factory('cartPaginationService',['$http', function($http, $rootScope) {
    	return {
    	    getCartByUser: function(id,page) {
    	    	var size = 10;
//    	    	if (angular.isObject(startDate)){
//    	    		startDate = Date.parse(startDate);
//    	    	}
//    	    	var url = "startDate=" + startDate + '&endDate=' + Date.parse(endDate);
    	      return $http.get('api/cart/pagination?page=' + page+'&size=' +size+ '&userId=' + id)
    	      .then(function(result){
//    	    	  console.log('result.data',result.data)
    	    	  	return result.data;
    	      	})
    	    }
    	}
}]);