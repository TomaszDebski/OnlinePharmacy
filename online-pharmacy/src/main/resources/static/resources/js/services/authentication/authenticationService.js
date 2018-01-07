/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.service.authentication',[])
    .factory('authenticationService',['$http','$log', function($http,$log) {
    	var authenticated = false;
    	return {
    		setAuthenticated : function(authenticatedVar){
    			authenticated = authenticatedVar;
    		},
    		getAuthenticated : function(){
    			return authenticated;
    		}
    	}
}])