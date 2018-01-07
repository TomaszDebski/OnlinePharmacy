/**
 * New typescript file
 */
angular.module('app.controller.three_orderPayment', [])
.controller('three_orderPaymentController',function($scope,$state,cartService,$filter) {
  
    $scope.model = {};
    $scope.paymentOptions = [
                            {id:1,name:"paypall",price:10},
                            {id:2,name:"bank",price:5},
                            {id:3,name:"self",price:0},
                                ];
    
    $scope.model.payment = cartService.getCart().paymentOption != undefined ? cartService.getCart().paymentOption : 1;
    cartService.getCart().stages[3].isBegin = true;
    
    $scope.goToNextStep = function(){
    	if ($scope.paymentForm.$valid) {      
	    }
	    else {
	        $scope.paymentForm.submitted=true;    
	    	return;
	    };
        var paymentOption = $scope.setPaymentOption($scope.model.payment);
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