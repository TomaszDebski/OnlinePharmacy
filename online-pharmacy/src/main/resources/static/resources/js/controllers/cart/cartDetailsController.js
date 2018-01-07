/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.cartDetails', [])
.controller('cartDetailsController',
		function($scope,$state,$window,cartDetailsResolve) { 
	$scope.cart = cartDetailsResolve;
	console.log('$window.sessionStorage.id',$window.sessionStorage.id)
	$scope.returnToCartList = function(){
//		$state.go("carts");
		$state.go("carts",{id:$window.sessionStorage.id});
	}
});