/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.users', [])
.controller('usersController',
		function($scope,$state,$filter,userPaginationService,usersResolve,userService,userPaginationService) { 
//	console.log('usersResolve',usersResolve)
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
					refreshUsers($scope.currentPage);
				});
			});
		
	}
	
	function refreshUsers(page) {
//		console.log('page',page)
		userPaginationService.getAllUser(page,10).then(function(result){
			$scope.totalItems = result.totalElements;
			$scope.users = result.content;
		})
	}
	
	$scope.setPage = function (pageNo) {
//		console.log('pageNo',pageNo)
	    $scope.currentPage = pageNo;
	  };
	
	$scope.pageChanged = function(){
		refreshUsers(($scope.currentPage -1));
	}
	
});