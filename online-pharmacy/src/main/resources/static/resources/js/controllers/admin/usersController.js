/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.users', [])
.controller('usersController',
		function($scope,$state,$filter,userPaginationService,usersResolve,userService,userPaginationService) { 
	$scope.users = usersResolve.content;
	$scope.totalItems = usersResolve.totalElements;
	$scope.currentPage = usersResolve.number;
	var $translate = $filter('translate');
	
	$scope.deleteUser = function(user){
		swal({
			  title: 'Usuwanie użytkownika',
			  text: 'Czy na pewno chcesz usunąć użytkownika?',
			  type: "warning",
			  showCancelButton: true,
			  confirmButtonClass: "btn-danger",
			  confirmButtonText: 'Usuń',
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
		userPaginationService.getAllUser(page,10).then(function(result){
			$scope.totalItems = result.totalElements;
			$scope.users = result.content;
		})
	}
	
	$scope.setPage = function (pageNo) {
	    $scope.currentPage = pageNo;
	  };
	
	$scope.pageChanged = function(){
		refreshUsers(($scope.currentPage -1));
	}
	
});