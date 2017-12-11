/**
 * @author Tomasz Dębski
 *
 */

angular.module('app.controller.addCateogry', [])
.controller('addCategoryController',
		function($scope,$state,$filter,$translate,cartService,categoryResolve,categoryResourceService) { 
    
	$scope.categories = categoryResolve ;
//    	console.log('$scope.categories',$scope.categories)
	$scope.newCategory = {};
	$scope.categoryId; 

    $scope.addCategory = function(){
    	console.log('$scope.$parent', $scope.$parent)
    	
    	if ($scope.newCategoryForm.$valid) {      
	    }else {
	        $scope.newCategoryForm.submitted=true;    
	    	return;
	    };
	    categoryResourceService.save({parentId:$scope.categoryId},$scope.newCategory,function(data){
//	    	console.log('dodana kategoria', data)
	    	swal('Powodzenie', 'Dodanie kategorii zakończyło się powodzeniem', "success");
	    	$scope.$parent.refreshMenu();
	    	$scope.newCategory = {};
	    	$scope.categoryId = "";
	    })
    };

});
