/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.shoppingCartSummary', [])
.controller('shoppingCartSummaryController',function($scope,$rootScope,$state,cartService,$filter) {
		$scope.cart = cartService.getCart();
		$scope.showNote = false;
	    
	    $scope.changeQuantity = function(product,event){
	        product.totalNumber = parseInt(event.target.value);
	        var refreshProduct = $filter('filter')(cartService.getCart().cartProducts, {'id':product.id})[0];
	        refreshProduct.totalNumber = parseInt(event.target.value);
	        cartService.refreshTotalPrice();
	    }
	    
	    $scope.goNext = function(){
	    	if ($rootScope.authenticated == 'true'){
	    		$state.go("order.delivery");
	    	}else{
	    		$state.go("order.recognize");
	    	}
	    }
	    
	    $scope.removeFromCart = function(id){
	    	cartService.removeFromCart(id);
	    }
})