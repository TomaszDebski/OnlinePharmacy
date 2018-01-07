/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.service.cartPagination',[])
    .factory('cartPaginationService',['$http', function($http, $rootScope) {
    	return {
    	    getCartByUser: function(id,page) {
    	      var size = 10;
    	      return $http.get('api/cart/pagination?page=' + page+'&size=' +size+ '&userId=' + id)
    	      .then(function(result){
    	    	  	return result.data;
    	      	})
    	    }
    	}
}]);