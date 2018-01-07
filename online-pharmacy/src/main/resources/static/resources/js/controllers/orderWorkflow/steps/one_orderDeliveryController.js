/**
 * 
 */
angular.module('app.controller.one_orderDelivery', [])
.controller('one_orderDeliveryController',function($scope,$translate,$state,cartService,$filter,loginUserResolve) {
	$scope.cart = cartService.getCart();
//	$scope.order.firstname = $scope.cart.firstname;
//	$scope.order.lastname = $scope.cart.lastname;
//	$scope.order.street = $scope.cart.address;
//	$scope.order.city = $scope.cart.city;
//	$scope.order.postCode = $scope.cart.postCode;
//	$scope.order.phone = $scope.cart.phone;
	
	$scope.order = {};
	if(loginUserResolve !== undefined && loginUserResolve != null){
		$scope.order.firstname = loginUserResolve.firstname;
		$scope.order.lastname = loginUserResolve.lastname;
		$scope.order.address = $scope.cart.address.length > 0 ? $scope.cart.address : loginUserResolve.userDetails.address;
		$scope.order.city = $scope.cart.city.length > 0 ? $scope.cart.city : loginUserResolve.userDetails.city;
		$scope.order.postCode = $scope.cart.postCode.length > 0 ? $scope.cart.postCode : loginUserResolve.userDetails.postCode;
		$scope.order.phone = $scope.cart.phone > 0 ? $scope.cart.phone : loginUserResolve.userDetails.phone;
		$scope.order.email = loginUserResolve.userDetails.email;
	}
		
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
	
	$scope.onlyNumbers = /^\d+$/;
})