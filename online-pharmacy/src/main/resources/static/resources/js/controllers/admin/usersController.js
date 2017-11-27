/**
 * 
 */

angular.module('app.controller.users', [])
.controller('usersController',
		function($scope,$state,$filter,userPaginationService,usersResolve,userService,userPaginationService) { 
	console.log('usersResolve',usersResolve)
	$scope.users = usersResolve.content;
	$scope.totalItems = usersResolve.totalElements;
	$scope.currentPage = usersResolve.number;
	var $translate = $filter('translate');
	
	
	$scope.deleteUser = function(user){
		swal({
			  title: $translate('users.remove_user'),
			  text: $translate('users.are_you_sure_remove_user'),
			  type: "warning",
			  showCancelButton: true,
			  confirmButtonClass: "btn-danger",
			  confirmButtonText: $translate('user.remove'),
			  cancelButtonText: $translate('commons.cancel'),
			  closeOnConfirm: true,
			},
			function(){
				userService.delete({id:user.id},function(){
//					swal($translate('commons.removed'), $translate('users.user_was_removed'), "success");
//					$state.go('allPatients');
					refreshUsers($scope.currentPage);
				});
			});
		
	}
	
	function refreshUsers(page) {
		console.log('page',page)
		userPaginationService.getAllUser(page,10).then(function(result){
			$scope.totalItems = result.totalElements;
//			$scope.currentPage = result.number;
			$scope.users = result.content;
//		return result.content;
		})
	}
	
	$scope.setPage = function (pageNo) {
		console.log('pageNo',pageNo)
	    $scope.currentPage = pageNo;
	  };
	
	$scope.pageChanged = function(){
		refreshUsers(($scope.currentPage -1));
	}
	
	
	
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