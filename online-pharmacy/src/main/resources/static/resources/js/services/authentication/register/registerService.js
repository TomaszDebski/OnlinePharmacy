angular.module('app.service.register',[])
    .factory('registerService',['$http','$log','$window','userService','$timeout','$filter' ,'$state','$rootScope','$timeout',
    	'loginService',
    	function($http,$log,$window,userService,$timeout,$filter,$state,$rootScope,$timeout,loginService) {
    	var $translate = $filter('translate');
    	return {
    		register : function(registerForm,user,passwordConfirm,notEqual,withLogin){
    			console.log('user register',user)
    			notEqual = false;
    			var isPasswordEqual = user.password == passwordConfirm;
    			if (!isPasswordEqual){
    				notEqual = true;
    				console.log("hasła nie są równe")
    				$rootScope.$emit('registerSuccess', false);
    			}
    			if (registerForm.$valid && isPasswordEqual) {
    				$http({
    	    	        url: 'api/user/byUsername/' + user.username,
    	    	        method: "GET",
    	    	    })
    	    	    .then(function(response) {
    	    	    	if (response.data != null && response.data.username != undefined && response.data.username.length > 0){
    	    	    		console.log("istnieje już taki użytkownik")
    	    	    	}else{
    	    	    		 if (isPasswordEqual){
    	    	    			 userService.save(user,function(){
//    	    	 					$scope.successAdd = true;
    	    	 					registerForm.submitted=false;
    	    	 					if (withLogin){
    	    	 						$timeout( function(){
    	    	 							console.log('user.username',user)
    	    	 							loginService.login(null,{username:user.username,password:user.password})
    	    	 							$rootScope.$emit('registerSuccess', true);
    	    	 						}, 1000 );
    	    	 					}
//    	    	 					$window.scrollTo(0, 0);
//    	    	 					user = {};
    	    	 					passwordConfirm = "";
//    	    	 					swal({
//    	    	 						  title: $translate('patients.remove_patient'),
//    	    	 						  text: $translate('patients.are_you_sure_remove_patient'),
//    	    	 						  type: "success",
//    	    	 						  showCancelButton: false,
//    	    	 						  confirmButtonClass: "btn-success",
//    	    	 						  confirmButtonText: $translate('patients.remove'),
////    	    	 						  cancelButtonText: $translate('commons.cancel'),
//    	    	 						  closeOnConfirm: true,
//    	    	 						},
//    	    	 						function(){
//    	    	 							$state.go("login")
//    	    	 						});
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