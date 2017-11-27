/**
 * 
 */
angular.module('app.controller.logout', []).controller(
		'logoutController',
		function($scope, $http, $rootScope, $state, $window,authenticationService) {
			$http.post("/logout")
				.success(function(data, status, headers, config) {
					$rootScope.authenticated = false;
					$rootScope.user = "";
					$rootScope.role = "";
					$rootScope.isAdmin = false;
					$rootScope.isUser = false;
					$scope.$parent.authenticated = false;
					$window.sessionStorage.user = "";
					$window.sessionStorage.authenticated = false;
					$window.sessionStorage.role = "";
					$window.sessionStorage.id = -1;
					authenticationService.setAuthenticated($window.sessionStorage.authenticated);
					$rootScope.$emit('parent', false);
					$state.go("login");
				}).error(function(data, status, headers, config) {
					console.log('Problem z wylogowaniem');
			})
			
			
});