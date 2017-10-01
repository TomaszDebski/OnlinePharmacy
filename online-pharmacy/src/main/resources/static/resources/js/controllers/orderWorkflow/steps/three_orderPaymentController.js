/**
 * New typescript file
 */
angular.module('app.controller.three_orderPayment', [])
.controller('three_orderPaymentController',function($scope,$http,$rootScope,$location,$window,$translate,
		$state,cartService,$filter
//		,authService
		) {
  
    $scope.model = {};
    $scope.paymentOptions = [
                            {id:1,name:"paypall",price:10},
                            {id:2,name:"casual",price:20},
                                ];
    
//          this.paymentOption = this.cartService.karta.paymentOption;
//          this.cartService.karta.stages[3].isBegin = true;
    
    $scope.goToNextStep = function(value){
    	if ($scope.paymentForm.$valid) {      
	    }
	    else {
	        $scope.paymentForm.submitted=true;    
	    	return;
	    };
        var paymentOption = $scope.setPaymentOption(value);
        cartService.updateCartStep3(paymentOption);
        cartService.getCart().stages[3].isComplete = true;
        $state.go('order.summary');
    }
    
    $scope.backToPreviousStep = function(){
    	$state.go('order.shipping');
    }
    
    $scope.setPaymentOption = function(value){
    	return $filter('filter')($scope.paymentOptions, {'id':value})[0];
    }
    
    
  
})