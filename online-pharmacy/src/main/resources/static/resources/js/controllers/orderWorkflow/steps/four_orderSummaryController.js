/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.four_orderSummary', [])
.controller('four_orderSummaryController',function($scope,$translate,$window,$state,cartService,$filter,cartResourceService,$timeout) {
	var $translate = $filter('translate');
    $scope.cart =cartService.getCart();
    $scope.tatalPrice = cartService.getTotalPrice();
    cartService.getCart().stages[4].isBegin = true;
    $scope.shippingPrice = cartService.getShippingPrice() + $scope.cart.paymentPrice;
    $scope.saveOrder = function(){
    	 angular.forEach(cartService.getCart().cartProducts, function(key,value){
    		 if (key.price == undefined || key.price == null){
    			 key.price = key.packages[0].price;
    		 }
    		 key.id = null;
    		 key.categoryProduct = null;
    	 });
    	 
    	 cartResourceService.save(cartService.getCart(),function(data){
         	swal($translate('cart.added'), $translate('cart.cart_was_added'), "success");
         	swal({
  			  title: $translate('cart.added'),
  			  text: $translate('cart.cart_was_added'),
  			  type: "success",
  			  showCancelButton: false,
  			  confirmButtonText: "OK",
  			  closeOnConfirm: true,
  			},
  			function(){
  				cartService.getCart().cartProducts = [];
  				cartService.getCart().totalPrice = 0;
  				cartService.clearCart();
  				$timeout( function(){
  					$state.go("carts",{id:$window.sessionStorage.id});
				}, 1000 );
  			});
         })
         
    }
    
    $scope.backToStep3 = function(){
    	$state.go('order.payment');
    }
})