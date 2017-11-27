/**
 * 
 */
angular.module('app.controller.index', [])
.controller('indexController',function($scope,$http,$rootScope,$location,$window,$translate,
		$state,cartService,categoryService
//		,authService
		) {
	$scope.aaaaaaaaaaaaaa = "przykład"
//	categoryService.resolveCategory();
//	categoryService.setCategories(categoryResolve);
//	console.log('index',categoryService.getCategories())
//	console.log('index')
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
//        return  $scope.msg;
	}
	
	$rootScope.$on('status_updated', function(event, obj){
//	    console.log('1111111111',obj.showMenu); // 10
	    $scope.showMenu = obj.showMenu;
	})
	$rootScope.$on('parent', function(e,bool) {  
//		console.log('bool',bool)
		$scope.authenticated = bool;
		$scope.loggedUserName = bool ? $window.sessionStorage.user : '';
		$scope.userId = bool ? $window.sessionStorage.id : -1;
	})
	
//	$scope.logout = function(authh){
//		var logout = authService.logout();
//		$scope.authenticated = logout.then(function(data){return data});
//		logout.then(function(data){
//			$scope.authenticated = false;
//			$rootScope.authenticated = false;
//			$rootScope.user = "";
//			$rootScope.role = "";
//			$rootScope.isAdmin = false;
//			$rootScope.isUser = false;
//			$window.sessionStorage.user = "";
//			$window.sessionStorage.authenticated = false;
//			$window.sessionStorage.role = "";
//			$state.go("home");
//		})
//	}
//	
	$scope.changeLanguage = function (key) {
	    $translate.use(key);
	  };
	  
	$scope.showCurrentLanguage = function (){
		return $translate.use();
	}
	
	$scope.showCarts = function(){
		$state.go("carts",{id:$scope.userId});
	}
})