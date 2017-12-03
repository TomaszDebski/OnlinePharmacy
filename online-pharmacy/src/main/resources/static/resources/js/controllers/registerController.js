/**
 * 
 */

angular.module('app.controller.register', [])
.controller('registerController',
		function($scope,userService,$rootScope, $http,$window,$timeout,$state,registerService) { 
	$scope.successAdd = false;
	$scope.user = {};
	$scope.createUser = function(){
		registerService.register($scope.registerForm,$scope.user,$scope.passwordConfirm,$scope.notEqual,false);
		
		
//		$scope.notEqual = false;
//		var isPasswordEqual = $scope.user.password == $scope.passwordConfirm;
//		if (!isPasswordEqual){
//			$scope.notEqual = true;
//			console.log("hasła nie są równe")
//		}
//		if ($scope.registerForm.$valid && isPasswordEqual) {
//			$http({
//    	        url: 'api/user/byUsername/' + $scope.user.username,
//    	        method: "GET",
//    	    })
//    	    .then(function(response) {
//    	    	if (response.data != null && response.data.username.length > 0){
//    	    		console.log("istnieje już taki użytkownik")
//    	    	}else{
//    	    		 if (isPasswordEqual){
//    	    			 userService.save($scope.user,function(){
//    	 					$scope.successAdd = true;
//    	 					 $scope.registerForm.submitted=false;
////    	 					$window.scrollTo(0, 0);
////    	 					$scope.user = {};
////    	 					$scope.passwordConfirm = "";
////    	 					$scope.registerForm.$setPristine();
////    	 					$scope.registerForm.$setUntouched();
//    	 					$window.scrollTo(0, 0);
//    	 					$timeout(function(){$state.go("login");},1000);
//    	 					
//    	 				});
//    	     	    }
//    	    	}
//    	    })
//	    }
//	    else {
//	        $scope.registerForm.submitted=true;    
//	    	return;
//	    };
		
		
		
	}
});