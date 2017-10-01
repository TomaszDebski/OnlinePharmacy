/**
 * 
 */

angular.module('app.controller.login', [])
.controller('loginController', function($scope,$http,$rootScope,$location,$window,$state,$cookies,authenticationService) {
	$rootScope.authenticated = $window.sessionStorage.authenticated;
	var self = this;
	$scope.error = false;
	$scope.login = function(event) {
		console.log('before $rootScope',$rootScope)
		event.preventDefault();
		if ($scope.loginForm.$valid) {      
	    }
	    else {
	        $scope.loginForm.submitted=true;    
	    	return;
	    };
		
		var data2 = 'j_username=' + encodeURIComponent($scope.data.credentials.username) +
        '&j_password=' + encodeURIComponent($scope.data.credentials.password);
		console.log('data2 ',data2)
		$http.post('/api/login', data2, {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
		,
//        xsrfHeaderName: 'X-XSRF-TOKEN'
        }).then(function(data, status, headers, config){
        		$http({
        	        url: 'findUser',
        	        method: "GET",
        	    })
        	    .then(function(funcResponse) {
        	    	var response = funcResponse.data;
        	    	if (response){
        	    		$http({
        	    	        url: 'api/user/byUsername/' + response.name,
        	    	        method: "GET",
        	    	    })
        	    	    .then(function(functResult) {
        	    	    	var result = functResult.data;
        	    	    	if (result != null && result.username.length > 0){
        	    	    		$rootScope.id = result.id;
        	    	    		$window.sessionStorage.id = $rootScope.id;
        	    	    	$scope.$parent.authenticated = true;
        	    	    	$rootScope.authenticated = true;
            	    		$scope.error = false;
            	    		$window.sessionStorage.role = response.authorities[0].authority;
            	    		$window.sessionStorage.user = response.name;
            	    		
            	    		$rootScope.user = $window.sessionStorage.user;
                            $window.sessionStorage.authenticated = true;
                            authenticationService.setAuthenticated($window.sessionStorage.authenticated);
                            console.log('authenticationService.getAuthenticated',authenticationService.getAuthenticated());
                            $scope.$broadcast('parent', 'Some data');
        	    	    	}
                            
//            	    		$state.go("allPatients");
        	    	    })
        	    		
        	    		
        	    	}else{
        	    		$scope.error = true;
        	    	}
        	    }), function(response) {
        	    	$scope.error = true;
        	    };
        	    
        }), function(response){
        	$scope.error = true;
        }
}
})