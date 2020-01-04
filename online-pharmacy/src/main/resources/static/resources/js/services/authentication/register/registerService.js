/**
 * @author Tomasz Dębski
 *
 */

angular.module('app.service.register',[])
    .factory('registerService',['$http','$log','$window','userService','$timeout','$filter' ,'$state','$rootScope','$timeout',
    	'loginService',
    	function($http,$log,$window,userService,$timeout,$filter,$state,$rootScope,$timeout,loginService) {
    	var $translate = $filter('translate');
    	return {
    		register : function(registerForm,user,passwordConfirm,notEqual,withLogin){
    			notEqual = false;
    			var isPasswordEqual = user.password == passwordConfirm;
    			if (!isPasswordEqual){
    				notEqual = true;
    				$rootScope.$emit('registerSuccess', false);
    			}
    			if (registerForm.$valid && isPasswordEqual) {
    				$http({
    	    	        url: 'api/user/byUsername/' + user.username,
    	    	        method: "GET",
    	    	    })
    	    	    .then(function(response) {
    	    	    	if (response.data != null && response.data.username != undefined && response.data.username.length > 0){
    	    	    	}else{
    	    	    		 if (isPasswordEqual){
    	    	    			 userService.save(user,function(){
    	    	 					registerForm.submitted=false;
    	    	 					if (withLogin){
    	    	 						$timeout( function(){
    	    	 							loginService.login(null,{username:user.username,password:user.password})
    	    	 							$rootScope.$emit('registerSuccess', true);
    	    	 						}, 2000 );
    	    	 					}
    	    	 					passwordConfirm = "";
    	    	 				});
    	    	     	    }
    	    	    	}
    	    	    })
    		    }
    		    else {
    		        registerForm.submitted=true;   
    		        $rootScope.$emit('registerSuccess', false);
    		    	return;
    		    };
    		}
    }
}])