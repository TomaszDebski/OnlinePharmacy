/**
 * 
 */
angular.module('app.controller.one_orderDelivery', [])
.controller('one_orderDeliveryController',function($scope,$http,$rootScope,$location,$window,$translate,
		$state,cartService,$filter,loginUserResolve
		//,loginUserResolve
//		,authService
		) {
//	console.log('loginUserResolve',loginUserResolve)
	console.log('cartService.karta.stages',cartService.getCart().stages)
	console.log('cartService.getCart().stages[1].isComplete',cartService.getCart().stages[0].isComplete)
	console.log('cartService.getCart().stages[1].isBegin',cartService.getCart().stages[0].isBegin)
	$scope.order = {};
	$scope.order.firstname = loginUserResolve.firstname;
	$scope.order.lastname = loginUserResolve.lastname;
	$scope.order.street = loginUserResolve.userDetails.address;
	$scope.order.city = loginUserResolve.userDetails.city;
	$scope.order.postCode = loginUserResolve.userDetails.postCode;
	$scope.order.phone = loginUserResolve.userDetails.phone;
//	var loginUserResolveVar = loginUserResolve.then(function(data){
//		console.log('data',data)
//		
//	})
	$scope.cart = cartService.getCart();
	
//	if ($rootScope.authenticated == 'true'){
//		console.log('authenticated')
//		var kkk = $http({
//            method: 'GET',
//            url: '/api/user/'+$window.sessionStorage.id})
//           .then(function(result){
//			console.log('result.data',result.data)
//			return result;
//		})
//		console.log('kkkk',kkk);
//		kkk.then(function(data){
//			console.log('data',data)
//			console.log('data',data.data)
//		})
//		console.log('$rootScope',$rootScope)
//		console.log('$window.sessionStorage',$window.sessionStorage)
//	}
		
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