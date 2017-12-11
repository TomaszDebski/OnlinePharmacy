/**
 * New typescript file
 */
angular.module('app.controller.two_orderShipping', [])
.controller('two_orderShippingController',function($scope,$http,$rootScope,$location,$window,$translate,
		$state,cartService,$filter) {
  
	$scope.model = {};
    $scope.deliveryOptions = [
                            {id:1,name:"curier",price:20},
                            {id:2,name:"postOffice",price:10},
                            {id:3,name:"self",price:0},
                                ];
    $scope.model.deliveryOption =
    				cartService.getCart().shippingOption != undefined ? cartService.getCart().shippingOption : 1;
    cartService.getCart().stages[2].isBegin = true;
    
    $scope.goToNextStep = function(){
    	if ($scope.deliveryForm.$valid) {      
	    }
	    else {
	        $scope.deliveryForm.submitted=true;    
	    	return;
	    };
	    var deliveryOption = $scope.setDeliveryOption($scope.model.deliveryOption);
        cartService.updateCartStep2(deliveryOption.id,deliveryOption.price);
        cartService.getCart().stages[2].isComplete = true;
        $state.go('order.payment');
    }
    
    $scope.backToStep1 = function(){
    	$state.go('order.delivery');
    }
    
    $scope.setDeliveryOption = function(value){
    	return $filter('filter')($scope.deliveryOptions, {'id':value})[0];
    }
})