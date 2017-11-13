/**
 * 
 */

angular.module('app.service.userPagination',[])
    .factory('userPaginationService',['$http', function($http, $rootScope) {
    	return {
    	    getAllUser: function(page,size) {
//    	    	if (angular.isObject(startDate)){
//    	    		startDate = Date.parse(startDate);
//    	    	}
//    	    	var url = "startDate=" + startDate + '&endDate=' + Date.parse(endDate);
    	      return $http.get('api/user/pagination?page=' + page+'&size=' +size)
    	      .then(function(result){
//    	    	  console.log('dddddd',result.data)
    	    	  	return result.data;
    	      	})
    	    }
    	}
}]);