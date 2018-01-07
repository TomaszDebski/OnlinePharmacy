/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.carts', [])
.controller('cartsController',
		function($scope,$state,$filter,cartService,$stateParams,cartResolve,cartPaginationService,$window) { 
	$scope.carts = cartResolve.content;
	$scope.totalItems = cartResolve.totalElements;
	$scope.currentPage = cartResolve.number;

	$scope.cartDetails = function(cartId){
		$state.go("cartDetails",{id:cartId,userId:$window.sessionStorage.id});
	}
	
	function refreshCarts(page) {
		cartPaginationService.getCartByUser($stateParams.id,page).then(function(result){
			$scope.totalItems = result.totalElements;
			$scope.carts = result.content;
		})
	}
	
	$scope.setPage = function (pageNo) {
	    $scope.currentPage = pageNo;
	  };
	
	$scope.pageChanged = function(){
		refreshCarts(($scope.currentPage -1));
	}
});