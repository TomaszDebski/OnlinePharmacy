/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.index', [])
.controller('indexController',function($scope,$window,$rootScope,$translate,$state,cartService,categoryService) {
	$scope.move = false;
	$scope.authenticated = false;
	$scope.cart = cartService.getCart();
	$scope.totalPrice = cartService.getTotalPrice();
	$scope.authenticated = $window.sessionStorage.authenticated;
	$scope.loggedUserName = $window.sessionStorage.user;
	$scope.userId = $window.sessionStorage.id;
	
	$scope.showRightPanel = function(isShow){
	    $scope.move = !$scope.move;
	  }
	
	$scope.refreshMenu = function(){
		$scope.$broadcast ('refreshMenu');
	}
	
	$rootScope.$on('status_updated', function(event, obj){
	    $scope.showMenu = obj.showMenu;
	})
	$rootScope.$on('parent', function(e,bool) {  
		$scope.authenticated = bool;
		$scope.loggedUserName = bool ? $window.sessionStorage.user : '';
		$scope.userId = bool ? $window.sessionStorage.id : -1;
	})
	
	$rootScope.currentLanguage = 'pl';
	$scope.changeLanguage = function (key) {
		$rootScope.currentLanguage = key;
	    $translate.use(key);
	  };
	  
	$scope.showCurrentLanguage = function (){
		return $translate.use();
	}
	
	$scope.showCarts = function(){
		$state.go("carts",{id:$scope.userId});
	}
	
	$scope.search = function(){
		$state.go("searchAll",{name:$scope.searchWord});
	}
})