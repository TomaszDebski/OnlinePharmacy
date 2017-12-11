/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.carts', [])
.controller('cartsController',
		function($scope,$state,$filter,cartService,$stateParams,cartResolve,cartPaginationService,$window) { 
//	console.log('cart $stateParams.id',$stateParams.id)
//	console.log('cartResolve',cartResolve);
	
	$scope.carts = cartResolve.content;
	$scope.totalItems = cartResolve.totalElements;
	$scope.currentPage = cartResolve.number;

	$scope.cartDetails = function(cartId){
		$state.go("cartDetails",{id:cartId,userId:$window.sessionStorage.id});
	}
	
	function refreshCarts(page) {
//		console.log('page',page)
		cartPaginationService.getCartByUser($stateParams.id,page).then(function(result){
			$scope.totalItems = result.totalElements;
			$scope.carts = result.content;
		})
	}
	
	$scope.setPage = function (pageNo) {
//		console.log('pageNo',pageNo)
	    $scope.currentPage = pageNo;
	  };
	
	$scope.pageChanged = function(){
		refreshCarts(($scope.currentPage -1));
	}
});