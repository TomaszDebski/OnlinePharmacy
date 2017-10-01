/**
 * 
 */
angular.module('app.controller.one_orderDelivery', [])
.controller('one_orderDeliveryController',function($scope,$http,$rootScope,$location,$window,$translate,
		$state,cartService,$filter
//		,authService
		) {
	
	$scope.cart = cartService.getCart();
		
	$scope.goToNextStep = function(order){
		if ($scope.orderDeliveryForm.$valid) {      
	    }
	    else {
	        $scope.orderDeliveryForm.submitted=true;    
	    	return;
	    };
        //this.saveCart(order);
        cartService.updateCartStep1(order);
        cartService.getCart().stages[1].isComplete = true;
        $state.go('order.shipping');
        
    }
    
	$scope.backToShipping = function(){
        $state.go('shoppingCart');
    }
})