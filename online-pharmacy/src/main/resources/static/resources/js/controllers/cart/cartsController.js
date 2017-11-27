/**
 * 
 */

angular.module('app.controller.carts', [])
.controller('cartsController',
		function($scope,$state,$filter,cartService,$stateParams,cartResolve,cartPaginationService,$window) { 
	console.log('cart $stateParams.id',$stateParams.id)
	console.log('cartResolve',cartResolve);
	
	$scope.carts = cartResolve.content;
	$scope.totalItems = cartResolve.totalElements;
	$scope.currentPage = cartResolve.number;

	$scope.cartDetails = function(cartId){
		$state.go("cartDetails",{id:cartId,userId:$window.sessionStorage.id});
	}
	
	function refreshCarts(page) {
		console.log('page',page)
		cartPaginationService.getCartByUser($stateParams.id,page).then(function(result){
			$scope.totalItems = result.totalElements;
//			$scope.currentPage = result.number;
			$scope.carts = result.content;
//		return result.content;
		})
	}
	
	$scope.setPage = function (pageNo) {
		console.log('pageNo',pageNo)
	    $scope.currentPage = pageNo;
	  };
	
	$scope.pageChanged = function(){
		refreshCarts(($scope.currentPage -1));
	}
//	$scope.showRightPanel = function(isShow2){
//        $scope.$parent.move = isShow2;
//    }
//	
//	$scope.removeFromCart = function(id){
//        cartService.removeFromCart(id);
//     }
//	
//	$scope.goToShoppingCart= function(){
//		$scope.$parent.move = false;
//		$state.go("shoppingCart");
//	}
//	
//	$scope.changeQuantity = function(product,event){
//        product.totalNumber = parseInt(event.target.value);
//        console.log('event.target.value',angular.isNumber(parseInt(event.target.value)))
//        var refreshProduct = $filter('filter')(cartService.getCart().cartProducts, {'id':product.id})[0];
//        refreshProduct.totalNumber = parseInt(event.target.value);
//        cartService.refreshTotalPrice();
//    }
});