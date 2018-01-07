/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.run', [])
.run(function($rootScope,$state,$http,$window,$location,categoryService){
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {//event, toState, toParams, fromState, fromParams
		if (toState.hasOwnProperty('params') && toState.params.hasOwnProperty('showMenu') && toState.params.showMenu == false){
			$rootScope.showMenu = false;
			$rootScope.$broadcast('status_updated', {showMenu: false});
		}else{
			$rootScope.$broadcast('status_updated', {showMenu: true});
		}
		$rootScope.user = $window.sessionStorage.user;
		$rootScope.authenticated = $window.sessionStorage.authenticated;
		$rootScope.role = $window.sessionStorage.role;
		$rootScope.isAdmin = $window.sessionStorage.isAdmin;
		$rootScope.id = $window.sessionStorage.id;
	})
});


