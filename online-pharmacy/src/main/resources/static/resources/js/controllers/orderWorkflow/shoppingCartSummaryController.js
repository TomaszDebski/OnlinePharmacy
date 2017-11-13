/**
 * 
 */
angular.module('app.controller.shoppingCartSummary', [])
.controller('shoppingCartSummaryController',function($scope,$http,$rootScope,$location,$window,$translate,
		$state,cartService,$filter
//		,authService
		) {
		$scope.cart = cartService.getCart();
		$scope.showNote = false;
//	   $scope.goToSummary = function(){
//	        this.cartService.karta.description = this.description;
//	        this.router.navigate(['/order/delivery']);
//	    }
	    
	    $scope.changeQuantity = function(product,event){
//	        console.log('value ' ,event.target.value);
//	        console.log('product ' ,product);
	    	
	        product.totalNumber = parseInt(event.target.value);
//	        let refreshProduct = this.cartService.karta.cartProducts.filter(item => item.id == product.id)[0];
	        var refreshProduct = $filter('filter')(cartService.getCart().cartProducts, {'id':product.id})[0];
	        refreshProduct.totalNumber = parseInt(event.target.value);
	        cartService.refreshTotalPrice();
	    }
	    
	    $scope.goNext = function(){
	    		console.log('$rootScope.authenticated',$rootScope.authenticated);
	    	if ($rootScope.authenticated == 'true'){
	    		$state.go("order.delivery");
	    	}else{
	    		$state.go("order.recognize");
	    	}
	    	
	    }
	    
	    $scope.removeFromCart = function(id){
	    	cartService.removeFromCart(id);
	    }
})