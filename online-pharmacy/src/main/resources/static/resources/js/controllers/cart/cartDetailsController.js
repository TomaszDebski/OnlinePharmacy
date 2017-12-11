/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.cartDetails', [])
.controller('cartDetailsController',
		function($scope) { 
	$scope.cart = cartDetailsResolve;
});