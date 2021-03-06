/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.cart', [])
.controller('cartController',
		function($scope,$state,$filter,cartService) { 
	
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
	
	$scope.changeQuantity = function(product,event){
        product.totalNumber = parseInt(event.target.value);
        var refreshProduct = $filter('filter')(cartService.getCart().cartProducts, {'id':product.id})[0];
        refreshProduct.totalNumber = parseInt(event.target.value);
        cartService.refreshTotalPrice();
    }
	
});