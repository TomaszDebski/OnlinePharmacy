/**
 * 
 */
angular.module('app.service.category',[])
    .factory('categoryService',['$http','$log','$resource', function($http,$log,$resource) {
    	self = this;
    	var categories = [];
    	
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
    	    },
    	    getCategoryByProductId : function(id){
    	    	return $http.get('api/category/oneCategory?id='+id).then(function(result){
//    	    		console.log('getCategoryByProductId',result);
    	    		return result;
    	    	})
    	    }

    	}
}]);