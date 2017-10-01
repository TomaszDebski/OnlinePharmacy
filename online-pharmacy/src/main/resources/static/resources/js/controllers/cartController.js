/**
 * 
 */

angular.module('app.controller.cart', [])
.controller('cartController',
		function($scope,$state,cartService) { 
//	console.log('cart')
	
	$scope.cart = cartService.getCart();
	$scope.showRightPanel = function(isShow2){
        $scope.$parent.move = isShow2;
    }
	
	$scope.removeFromCart = function(id){
        cartService.removeFromCart(id);
     }
	
	$scope.goToShoppingCart= function(){
		$scope.$parent.move = false;
		$state.go("shoppingCart");
	}
});