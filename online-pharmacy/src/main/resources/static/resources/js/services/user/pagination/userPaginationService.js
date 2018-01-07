/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.service.userPagination',[])
    .factory('userPaginationService',['$http', function($http, $rootScope) {
    	return {
    	    getAllUser: function(page,size) {
    	      return $http.get('api/user/pagination?page=' + page+'&size=' +size)
    	      .then(function(result){
    	    	  	return result.data;
    	      	})
    	    }
    	}
}]);