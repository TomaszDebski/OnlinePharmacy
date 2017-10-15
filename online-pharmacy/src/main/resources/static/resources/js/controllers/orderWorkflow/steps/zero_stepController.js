/**
 * 
 */
angular.module('app.controller.zero_step', [])
.controller('zero_stepController',function($scope,$http,$rootScope,$location,$window,$translate,
		$state,cartService,$filter,registerService
//		,authService
		) {
	$scope.active = 'exist';
	$scope.cart = cartService.getCart();
	$scope.userLogin = {};
	$scope.emailToSend = "";
	$scope.register = {name:""};
		
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
	
	$scope.login = function(){
		if ($scope.existingForm.$valid) {      
	    }
	    else {
	        $scope.existingForm.submitted=true;    
	    	return;
	    };
	}
	
	$scope.sendEmail = function(){
		if ($scope.emailForm.$valid) {      
	    }
	    else {
	        $scope.emailForm.submitted=true;    
	    	return;
	    };
	}
	
	$scope.registerFunc = function(){
		if ($scope.registerForm.$valid) { 
			registerService.register($scope.registerForm,$scope.register,$scope.passwordConfirm);
	    }
	    else {
	        $scope.registerForm.submitted=true;    
	    	return;
	    };
	}
	
})