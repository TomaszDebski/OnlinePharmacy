/**
 * 
 */
angular.module('app.controller.index', [])
.controller('indexController',function($scope,$http,$rootScope,$location,$window,$translate,
		$state,cartService
//		,authService
		) {
//	console.log('index')
	$scope.move = false;
	$scope.authenticated = false;
	
	$scope.cart = cartService.getCart();
	$scope.totalPrice = cartService.getTotalPrice();
	
	$scope.authenticated = $window.sessionStorage.authenticated;
	$scope.loggedUserName = $window.sessionStorage.user;
	
	$scope.showRightPanel = function(isShow){
	    $scope.move = !$scope.move;
	  }
	
//	$scope.logout = function(authh){
//		var logout = authService.logout();
//		$scope.authenticated = logout.then(function(data){return data});
//		logout.then(function(data){
//			$scope.authenticated = false;
//			$rootScope.authenticated = false;
//			$rootScope.user = "";
//			$rootScope.role = "";
//			$rootScope.isAdmin = false;
//			$rootScope.isUser = false;
//			$window.sessionStorage.user = "";
//			$window.sessionStorage.authenticated = false;
//			$window.sessionStorage.role = "";
//			$state.go("home");
//		})
//	}
//	
	$scope.changeLanguage = function (key) {
	    $translate.use(key);
	  };
	  
	$scope.showCurrentLanguage = function (){
		return $translate.use();
	}
})