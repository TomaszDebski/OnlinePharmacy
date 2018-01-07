/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.userPanel', [])
.controller('userPanelController',
		function($scope,$window,cartService,authenticationService) { 
	$scope.cart = cartService.getCart();
	$scope.totalPrice = cartService.getTotalPrice();
	$scope.authenticated = $scope.$parent.authenticated;
	$scope.loggedUserName = $window.sessionStorage.user;
	
	$scope.showRightPanel = function(isShow){
		$scope.$parent.move = !$scope.$parent.move;
	}
	
	$scope.search = function(){
		$state.go("cartDetails",{name:$scope.searchWord});
	}
	
});