/**
 * New typescript file
 */
angular.module('app.controller.two_orderShipping', [])
.controller('two_orderShippingController',function($scope,$http,$rootScope,$location,$window,$translate,
		$state,cartService,$filter
//		,authService
		) {
  
    	$scope.deliveryOptions = [
                            {id:0,name:"curier",price:20},
                            {id:1,name:"postOffice",price:10},
                            {id:2,name:"self",price:0},
                                ];
    	$scope.data = 
    		{deliveryOption: 
    				cartService.getCart().shippingOption != undefined ? cartService.getCart().shippingOption : 1};
    cartService.getCart().stages[2].isBegin = true;
    
    $scope.goToNextStep = function(){
//		console.log('value',value)
    	if ($scope.deliveryForm.$valid) {      
	    }
	    else {
	        $scope.deliveryForm.submitted=true;    
	    	return;
	    };
        //this.saveCart(order);
	    var deliveryOption = $scope.setDeliveryOption($scope.data.deliveryOption);
        cartService.updateCartStep2(deliveryOption.id,deliveryOption.price);
        cartService.getCart().stages[2].isComplete = true;
        $state.go('order.payment');
//        let deliveryOption : any = this.setDeliveryOption(value);
//        this.cartService.updateCartStep2(deliveryOption.id,deliveryOption.price);
//        this.cartService.karta.stages[2].isComplete = true;
//        this.router.navigate(['/order/payment']);
    }
    
    $scope.backToStep1 = function(){
    	$state.go('order.delivery');
//        this.router.navigate(['/order/delivery']);
    }
    
    $scope.setDeliveryOption = function(value){
    	return $filter('filter')($scope.deliveryOptions, {'id':value})[0];
//        return this.deliveryOptions.filter(item => item.id == value)[0];
    }
    
    
    
})