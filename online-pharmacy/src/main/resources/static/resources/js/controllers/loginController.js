/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.login', [])
.controller('loginController', function($scope,$http,$rootScope,$location,$window,$state,$cookies,authenticationService,
		loginService) {
	$rootScope.authenticated = $window.sessionStorage.authenticated;
	var self = this;
	$scope.error = false;
	$scope.login = function(event) {
		loginService.login($scope.loginForm,$scope.data.credentials);
		$rootScope.$on('errorLogin', function(e,data) {  
			$scope.error = data;
			$scope.loginForm.submitted=data; 
			if (!data){
				$state.go("medicineList",{name:'pain-relief'});
			}
		})
	}
})