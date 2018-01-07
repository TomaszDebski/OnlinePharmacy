/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.service.cartDetails',[])
    .factory('cartDetailsService',['$http', function($http) {
    	return {
    		getCartDetails : function(id){
    			return $http.get('api/cart/'+id).then(function(result){
    	    		return result.data;
    	    	})
    		}
    }
}]);