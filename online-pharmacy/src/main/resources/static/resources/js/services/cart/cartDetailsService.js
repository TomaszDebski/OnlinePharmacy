angular.module('app.service.cartDetails',[])
    .factory('cartDetailsService',['$http','$log','$window','userService','$timeout','$filter' ,'$state',
    	function($http,$log,$window,userService,$timeout,$filter,$state) {
//    	var $translate = $filter('translate');
    	return {
    		getCartDetails : function(id){
    			return $http.get('api/cart/'+id).then(function(result){
//    	    		console.log('getCartDetails',result.data);
    	    		return result.data;
    	    	})
    		}
    }
}])