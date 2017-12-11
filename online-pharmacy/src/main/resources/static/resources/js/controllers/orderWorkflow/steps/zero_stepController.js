/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.zero_step', [])
.controller('zero_stepController',function($scope,$http,$rootScope,$location,$window,$translate,
		$state,cartService,$filter,registerService,loginService) {
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
        cartService.updateCartStep1(order);
        cartService.getCart().stages[1].isComplete = true;
        $state.go('order.delivery');
        
    }
    
	$scope.backToShipping = function(){
        $state.go('shoppingCart');
    }
	
	$scope.errorLogin = false;
	$scope.login = function(){
		if ($scope.existingForm.$valid) {    
			loginService.login($scope.existingForm,$scope.userLogin);
			$rootScope.$on('errorLogin', function(e,data) {  
				$scope.errorLogin = data;
				if (!data){
					$state.go('order.delivery');
				}
			})
	    }
	    else {
	        $scope.existingForm.submitted=true;    
	        $scope.errorLogin = true;
	    	return;
	    };
	}
	
	$scope.sendEmail = function(){
		if ($scope.emailForm.$valid) {   
			$state.go('order.delivery');
	    }
	    else {
	        $scope.emailForm.submitted=true;    
	    	return;
	    };
	}
	
	$scope.registerFunc = function(){
		if ($scope.registerForm.$valid) { 
			registerService.register($scope.registerForm,$scope.register,$scope.passwordConfirm,$scope.notEqual,true);
			$rootScope.$on('registerSuccess', function(e,data) {  
				if(data){
					$state.go('order.delivery');
				}
			})
	    }
	    else {
	        $scope.registerForm.submitted=true;    
	    	return;
	    };
	}
	
})