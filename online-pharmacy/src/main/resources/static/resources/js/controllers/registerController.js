/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.register', [])
.controller('registerController',
		function($scope,userService,$rootScope,$http,$window,$timeout,$state,registerService) { 
	$scope.successAdd = false;
	$scope.user = {};
	$scope.user.userDetails = {};
	$scope.createUser = function(){
		
		registerService.register($scope.registerForm,$scope.user,$scope.passwordConfirm,$scope.notEqual,false);
			if($scope.registerForm.$valid){
				$timeout( function(){
					$state.go("login");
				}, 1000 );
			}
	}
});