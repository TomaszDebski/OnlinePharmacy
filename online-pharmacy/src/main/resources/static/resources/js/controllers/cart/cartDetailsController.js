/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.cartDetails', [])
.controller('cartDetailsController',
		function($scope,$state,$window,cartDetailsResolve) { 
	$scope.cart = cartDetailsResolve;
	$scope.returnToCartList = function(){
		$state.go("carts",{id:$window.sessionStorage.id});
	}
});