

angular.module('app.controller.addCateogry', [])
.controller('addCategoryController',
		function($scope,$state,$filter,$translate,cartService,categoryResolve,categoryResourceService) { 
    
    	$scope.categories = categoryResolve ;
    	console.log('$scope.categories',$scope.categories)
    	$scope.newCategory = {};
    	$scope.categoryId; 


//  ngOnInit() {
//      this.categories = this._cookieService.getObject('menu');
//      this.categoryId = -1;
//  }
    
    $scope.addCategory = function(){
    	console.log('$scope.$parent', $scope.$parent)
    	
    	if ($scope.newCategoryForm.$valid) {      
	    }
	    else {
	        $scope.newCategoryForm.submitted=true;    
	    	return;
	    };
//        if (this.categoryId > -1){
	    categoryResourceService.save({parentId:$scope.categoryId},$scope.newCategory,function(data){
	    	console.log('dodana kategoria', data)
	    	swal('Powodzenie', 'Dodanie kategorii zakończyło się powodzeniem', "success");
	    	$scope.$parent.refreshMenu();
	    	$scope.newCategory = {};
	    	$scope.categoryId = "";
	    })
//        this.categoryService.saveCategory(this.newCategory,this.categoryId)
//            .subscribe(
//                data => {
//                    console.log("udało się dodać nową kategorię");
//                    this.categoryService.refreshAll();
//                },
//                error => {
//                    console.log("nie udało się dodać nową kategorię");
//                });       
//        }
    };

});
