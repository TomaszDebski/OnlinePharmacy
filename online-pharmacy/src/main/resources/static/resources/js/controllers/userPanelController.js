/**
 * 
 */

angular.module('app.controller.userPanel', [])
.controller('userPanelController',
		function($scope,$rootScope,$window,cartService,authenticationService) { 
//	console.log('$scope.$parent.authenticated',$scope.$parent.authenticated)
	$scope.cart = cartService.getCart();
	$scope.totalPrice = cartService.getTotalPrice();
	
	$scope.authenticated = $scope.$parent.authenticated;
	$scope.loggedUserName = $window.sessionStorage.user;
	
	$scope.showRightPanel = function(isShow){
	    $scope.$parent.move = !$scope.$parent.move;
	  }
	
	$scope.search = function(){
		console.log('jestem w search w userPanelController')
		$state.go("cartDetails",{name:$scope.searchWord});
	}
	
});