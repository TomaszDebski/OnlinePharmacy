/**
 * 
 */
angular.module('app.service.category',[])
    .factory('categoryService',['$http','$log','$resource', function($http,$log,$resource) {
    	self = this;
    	var categories = [];
    	console.log('categoryService')
//    	resolveFunction = function(){
//    		var sss = $http.get('api/category').then(function(result){
//    			console.log('result.data',result.data)
//				categories = result.data;
//			});
//    		console.log('sss',sss)
//    	}
    	
    	return {
    		setCategories : function(categoriesVar){
    			categories = categoriesVar;
    		},
    		getCategories : function(){
    			return categories;
    		},
    	    getVisitsByPatientId: function(id) {
    	    	return $http.get("visit/byPatient",{params: { patientId: id }})
    	      .then(
					function success(data){
						return data.data;
					},function error(data){
						console.log("nie udało się");
					}
				)
    	    },
//    	    resolveCategory: function(){
//    	    	resolveFunction();
//    	    },
//
    	    getAll: function() {
    	        return $http.get('api/category');
    	    },
    	  
    	     getByName(name) {
    	        return $http.get('api/category/one?name='+ name);
    	    },
    	    resourceCategory : function(){
    	    	return  $resource('api/product/:id', {id : "@id"},
    	    			{ 
    	    		'query':  {method:'GET', isArray:true},
    	    		'update' :{method: "PUT"} 
    	    		  })
    	    }

//    	    getById(id: number) {
//    	        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
//    	    }
//
//    	    saveCategory(category: any,parentId: string ) {
//    	        console.log("user " ,category)
//    	        return this.http.post('http://localhost:8080/api/category?parentId='+parentId, category);
//    	    }
//
//    	    update(user: User) {
//    	        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
//    	    }
//
//    	    delete(id: number) {
//    	        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
//    	    }
//
//    	    // private helper methods
//
//    	    private jwt() {
//    	        // create authorization header with jwt token
//    	        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
//    	        if (currentUser && currentUser.token) {
//    	            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
//    	            return new RequestOptions({ headers: headers });
//    	        }
//    	    }
    	}
}]);