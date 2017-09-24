angular.module('app.service.authentication',[])
    .factory('authenticationService',['$http','$log', function($http,$log) {
    	return {
    		
    	}
//    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
//    
//    public currentUser: string = null;
//    public isAuthenticated: boolean = false;
//    
//    constructor(private http: Http,public _cookieService :CookieService) { 
//        this.currentUser = this._cookieService.get('username');
//        this.isAuthenticated = this._cookieService.get('isAuthenticated') == 'true';
//    }
    
    
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
    
    

    login(username: string, password: string) {
//      let data2 = 'j_username=' + encodeURIComponent(username) +
//        '&j_password=' + encodeURIComponent(password);
//        console.log("data2 " ,data2);
        let options = new RequestOptions({ headers: this.headers, withCredentials: true });
      console.log("username " ,username);
        let data = new URLSearchParams();
        data.append('j_username', username);
        data.append('j_password', password);
//        let data = {j_username: 'dddd',j_password: 'dddd'};
        const body = {name: 'Brad'};
      console.log("data " ,data);
        return this.http.post('http://localhost:8080/api/login',
            data, 
            options
          )
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log("response " ,response);
                console.log("user " ,user);
//                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
//                    localStorage.setItem('currentUser', JSON.stringify(user));
//                }

                return user;
            });
    }

    logout() {
        this.currentUser = "";
        this.isAuthenticated = false;
        this._cookieService.put('username',null);
        this._cookieService.put('isAuthenticated','false');
    }
}