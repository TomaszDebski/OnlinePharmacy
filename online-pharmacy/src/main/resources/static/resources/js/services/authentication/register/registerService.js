angular.module('app.service.register',[])
    .factory('registerService',['$http','$log','$window','userService','$timeout','$filter' ,'$state','$rootScope','$timeout',
    	function($http,$log,$window,userService,$timeout,$filter,$state,$rootScope,$timeout) {
    	var $translate = $filter('translate');
//    	var authenticated = false;
    	return {
    		register : function(registerForm,user,passwordConfirm,notEqual,withLogin){
    			console.log('user register',user)
    			notEqual = false;
    			var isPasswordEqual = user.password == passwordConfirm;
    			if (!isPasswordEqual){
    				notEqual = true;
    				console.log("hasła nie są równe")
    				$rootScope.$emit('registerSuccess', false);
    			}
    			if (registerForm.$valid && isPasswordEqual) {
    				$http({
    	    	        url: 'api/user/byUsername/' + user.username,
    	    	        method: "GET",
    	    	    })
    	    	    .then(function(response) {
    	    	    	if (response.data != null && response.data.username != undefined && response.data.username.length > 0){
    	    	    		console.log("istnieje już taki użytkownik")
    	    	    	}else{
    	    	    		 if (isPasswordEqual){
    	    	    			 userService.save(user,function(){
//    	    	 					$scope.successAdd = true;
    	    	 					registerForm.submitted=false;
    	    	 					console.log('user register',user)
    	    	 					if (withLogin){
    	    	 						loginService.login(null,{username:user.username,password:user.password})
    	    	 					}
//    	    	 					$window.scrollTo(0, 0);
    	    	 					user = {};
    	    	 					passwordConfirm = "";
    	    	 					//10 seconds delay
    	    	 					//10 seconds delay
    	    	 					$timeout( function(){
    	    	 			            $rootScope.$emit('registerSuccess', true);
    	    	 			        }, 1000 );
//    	    	 					$scope.registerForm.$setPristine();
//    	    	 					$scope.registerForm.$setUntouched();
//    	    	 					$window.scrollTo(0, 0);
//    	    	 					$timeout(function(){$state.go("login");},1000);
//    	    	 					swal({
//    	    	 						  title: $translate('patients.remove_patient'),
//    	    	 						  text: $translate('patients.are_you_sure_remove_patient'),
//    	    	 						  type: "success",
//    	    	 						  showCancelButton: false,
//    	    	 						  confirmButtonClass: "btn-success",
//    	    	 						  confirmButtonText: $translate('patients.remove'),
////    	    	 						  cancelButtonText: $translate('commons.cancel'),
//    	    	 						  closeOnConfirm: true,
//    	    	 						},
//    	    	 						function(){
//    	    	 							$state.go("login")
//    	    	 						});
    	    	 				});
    	    	     	    }
    	    	    	}
    	    	    })
    		    }
    		    else {
    		        registerForm.submitted=true;   
    		        $rootScope.$emit('registerSuccess', false);
    		    	return;
    		    };
    		}
    	
//    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
//    
//    public currentUser: string = null;
//    public isAuthenticated: boolean = false;
//    
//    constructor(private http: Http,public _cookieService :CookieService) { 
//        this.currentUser = this._cookieService.get('username');
//        this.isAuthenticated = this._cookieService.get('isAuthenticated') == 'true';
    }
    
    
//    login2(username : string , password : string){
//        let data : string = '?username='+username + '&password='+password;
//        return this.http.get('http://localhost:8080/login' + data
//          )
//            .map((response: Response) => {
//                // login successful if there's a jwt token in the response
//                let user = response;
//                this._cookieService.put('username',user.json().username);
//                this._cookieService.put('isAuthenticated', String(user.json().username != null || user.json().username != "" ));
//                console.log("user.json().username " ,user.json().username);
//                console.log("user " ,user);
////                if (user && user.token) {
////                    localStorage.setItem('currentUser', JSON.stringify(user));
////                }
//                
//                return user;
//            });
//    }
    
}])