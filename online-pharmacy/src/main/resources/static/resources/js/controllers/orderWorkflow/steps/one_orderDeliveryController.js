/**
 * 
 */
angular.module('app.controller.one_orderDelivery', [])
.controller('one_orderDeliveryController',function($scope,$http,$rootScope,$location,$window,$translate,
		$state,cartService,$filter,loginUserResolve) {
	$scope.order = {};
	if(loginUserResolve !== undefined && loginUserResolve != null){
		$scope.order.firstname = loginUserResolve.firstname;
		$scope.order.lastname = loginUserResolve.lastname;
		$scope.order.street = loginUserResolve.userDetails.address;
		$scope.order.city = loginUserResolve.userDetails.city;
		$scope.order.postCode = loginUserResolve.userDetails.postCode;
		$scope.order.phone = loginUserResolve.userDetails.phone;
	}
	$scope.cart = cartService.getCart();
		
	$scope.goToNextStep = function(order){
		if ($scope.orderDeliveryForm.$valid) {      
	    }
	    else {
	        $scope.orderDeliveryForm.submitted=true;    
	    	return;
	    };
        cartService.updateCartStep1(order);
        cartService.getCart().stages[1].isComplete = true;
        $state.go('order.shipping');
        
    }
    
	$scope.backToShipping = function(){
        $state.go('shoppingCart');
    }
})