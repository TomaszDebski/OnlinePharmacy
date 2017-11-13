/**
 * 
 */

angular.module('app.controller.users', [])
.controller('usersController',
		function($scope,$state,$filter,userPaginationService,usersResolve) { 
//	console.log('usersResolve',usersResolve)
	$scope.users = usersResolve;
//	ddd = userPaginationService.getAllUser(0,10);
//	ddd.then(function(result){
//		console.log('usersResolvedddddd',result)
////		return result.data;
//	});
	
//	$scope.cart = cartService.getCart();
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
//        product.totalNumber = event.target.value;
//        var refreshProduct = $filter('filter')(cartService.getCart().cartProducts, {'id':product.id})[0];
//        refreshProduct.totalNumber = event.target.value;
//        cartService.refreshTotalPrice();
//    }
});