/**
 * 
 */

angular.module('app.controller.userPanel', [])
.controller('userPanelController',
		function($scope,cartService) { 
	console.log('userPanel')
	$scope.cart = cartService.getCart();
	$scope.totalPrice = cartService.getTotalPrice();
	
	$scope.showRightPanel = function(isShow){
//	      console.log("pokazuje panel1" , this.rightPanelShow)
	    $scope.$parent.move = !$scope.$parent.move;
//	    this.rightPanelShow =  !this.rightPanelShow;
	  }
});