/**
 * @author Tomasz Dębski
 *
 */

angular.module('app.service.login',[])
    .factory('loginService',['$http','$log','$window','userService','$timeout','$filter' ,'$state','$window','$rootScope',
    	function($http,$log,$window,userService,$timeout,$filter,$state,$window,$rootScope) {
    	var $translate = $filter('translate');
    	return {
    		login : function(loginForm,credentials){
    			if (loginForm != null){
    				if (loginForm.$valid) {      
    				}
    				else {
    					loginForm.submitted=true;    
    					return;
    				};
    			}
    			
    			var data2 = 'j_username=' + encodeURIComponent(credentials.username) +
    	        '&j_password=' + encodeURIComponent(credentials.password);
    			$http.post('/api/login', data2, {
    	        headers : {
    	            'Content-Type': 'application/x-www-form-urlencoded'
    	        }
    			,
//    	        xsrfHeaderName: 'X-XSRF-TOKEN'
    	        }).then(
    	        		function(data, status, headers, config){
    	        		$http({
    	        	        url: 'findUser',
    	        	        method: "GET",
    	        	    })
    	        	    .then(function(funcResponse) {
    	        	    	console.log('after findUser')
    	        	    	var response = funcResponse.data;
    	        	    	if (response){
    	        	    		$http({
    	        	    	        url: 'api/user/byUsername/' + response.name,
    	        	    	        method: "GET",
    	        	    	    })
    	        	    	    .then(function(functResult) {
    	        	    	    	var result = functResult.data;
    	        	    	    	if (result != null && result.username.length > 0){
//    	        	    	    		console.log('functResult',result);
    	        	    	    		$rootScope.id = result.id;
    	        	    	    		$window.sessionStorage.id = result.id;
//    	        	    	    		console.log('$window.sessionStorage.id',$window.sessionStorage.id)
    	        	    	    		if (result.role == 'ROLE_ADMIN'){
    	        	    	    			$window.sessionStorage.isAdmin = true;
    	        	    	    		}else if (result.role == 'ROLE_USER'){
    	        	    	    			$window.sessionStorage.isAdmin = false;
    	        	    	    		}else{
    	        	    	    			$window.sessionStorage.isAdmin = false;
    	        	    	    		}
    	        	    	    		$window.sessionStorage.role = result.role;
    		        	    	    	$rootScope.authenticated = true;
    		            	    		$window.sessionStorage.role = response.authorities[0].authority;
    		            	    		$window.sessionStorage.user = response.name;
    		            	    		$rootScope.user = $window.sessionStorage.user;
    		                            $window.sessionStorage.authenticated = true;
    		                            $rootScope.$emit('parent', true);
    		                            $rootScope.$emit('errorLogin', false);
    	        	    	    	}
    	        	    	    })
    	        	    	}else{
    	        	    		error = true;
    	        	    	}
    	        	    }), function(response) {
    	        	    	error = true;
    	        	    };
    	        	    
    	        }, function(response){
    	        	error = true;
    	        	$rootScope.$emit('errorLogin', true);
    	        })
    		}
    }
}])