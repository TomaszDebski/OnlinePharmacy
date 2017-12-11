/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.four_orderSummary', [])
.controller('four_orderSummaryController',function($scope,$http,$rootScope,$location,$window,$translate,
		$state,cartService,$filter,cartResourceService) {
	var $translate = $filter('translate');
    $scope.cart =cartService.getCart();
    $scope.tatalPrice = cartService.getTotalPrice();
    cartService.getCart().stages[4].isBegin = true;
    $scope.shippingPrice = cartService.getShippingPrice();
    
    $scope.saveOrder = function(){
//    	 console.log('cartService.getCart()',cartService.getCart());
    	 angular.forEach(cartService.getCart().cartProducts, function(key,value){
    		 if (key.price == undefined || key.price == null){
    			 key.price = key.packages[0].price;
    		 }
    		 key.id = null;
    		 key.categoryProduct = null;
    	 })
    	 cartResourceService.save(cartService.getCart(),function(data){
//         	console.log('dodano Cart',data)
         	swal($translate('cart.added'), $translate('cart.cart_was_added'), "success");
         })
    }
    
    $scope.backToStep3 = function(){
    	$state.go('order.payment');
    }
    
})