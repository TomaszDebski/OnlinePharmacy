/**
 * 
 */

angular.module('app.run', [])
.run(function($rootScope,$state,$http,$window,$location,categoryService){
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {//event, toState, toParams, fromState, fromParams
//		console.log('toState',(toState.hasOwnProperty('params') && toState.params.hasOwnProperty('showMenu') && toState.params.showMenu == false))
		if (toState.hasOwnProperty('params') && toState.params.hasOwnProperty('showMenu') && toState.params.showMenu == false){
			$rootScope.showMenu = false;
//			console.log('$rootScope.showMenu',$rootScope.showMenu)
			$rootScope.$broadcast('status_updated', {showMenu: false});
		}else{
			$rootScope.$broadcast('status_updated', {showMenu: true});
//			$rootScope.showMenu = true;
		}
//		console.log('$window.sessionStorage.user',$window.sessionStorage.user)
		console.log('$window.sessionStorage.authenticated',$window.sessionStorage.authenticated)
		$rootScope.user = $window.sessionStorage.user;
		$rootScope.authenticated = $window.sessionStorage.authenticated;
		$rootScope.role = $window.sessionStorage.role;
		$rootScope.isAdmin = $window.sessionStorage.isAdmin;
		$rootScope.id = $window.sessionStorage.id;
//		var stateArray = ["register","login","contact","home"]
//		var name = toState.name;
//		if ($window.sessionStorage.user == undefined || $window.sessionStorage.user == ""){
//			if (stateArray.indexOf(toState.name) == -1){
//				$state.go( "login", {});
//				event.preventDefault();
//			}
//		}
	})
//	$rootScope.$on('$stateChangeSuccess', 
//					function(event, toState, toParams, fromState, fromParams){ 
//		
//	})
//	 $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
//	        if(error.status == 401){
//	            console.log("401 detected. Redirecting...", error);
//	            $state.go("home");
//	        }
//	      });
});


