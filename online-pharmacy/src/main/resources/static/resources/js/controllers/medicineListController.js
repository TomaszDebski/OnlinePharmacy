/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.medicineList', [])
.controller('medicineListController',
		function($stateParams,categoryService,$scope,cartService,$filter,Product,categoryResolve,oneCategoryResolve,
				productsResolve,productPaginationService,$timeout ) { 
	$scope.categoryName = $stateParams.name;
	$scope.totalItems = productsResolve.totalElements;
	$scope.currentPage = productsResolve.number;
	$scope.numberOfProduct = 0;
	$scope.pageChanged = function() {
		refreshProducts(($scope.currentPage-1),9);
	}
	
	$scope.setPage = function (pageNo) {
		    $scope.currentPage = pageNo;
		  };
		  
	refreshProducts = function(page,size){
		var vis = productPaginationService.getProductByCategory(page,size,$stateParams.name);
		vis.then(function(result){
	    	$scope.products = result.content;
	    	$scope.totalItems = result.totalElements;
	    	$scope.currentPage = result.number+1;
	    })
	}
	$scope.menu = categoryResolve;
	$scope.products = productsResolve.content;
	$scope.category = oneCategoryResolve;
	
	$scope.addToCart = function(product,packageId){
		var pack = $filter('filter')(product.packages, {'id':packageId.id})[0];
		var productCopy = angular.copy(product);
	    productCopy.packages = [];
	    productCopy.packages.push(pack);
	    productCopy.price = pack.price;
	    cartService.setTotalPrice(100);
		cartService.addToCart(productCopy);
		$scope.cart = cartService.getCart();
	  }
		$scope.isGrid = true;
	 $scope.changeBetweenGridAndList = function(changeToGrid){
	        $scope.isGrid = changeToGrid;
	    }
	 
	 ////// Sort list/////
	 
	 SortOption = function(key,value,direction,text){
		 this.key = key;
	     this.value = value;
	     this.direction = direction;
	     this.text = text;
	 }
	 sortOptionsArray = [];
	 sortOptionsArray.push(new SortOption('name-ascending','name',false,'Alfabetycznie, A-Z'));
	 sortOptionsArray.push(new SortOption('name-descending','name',true,'Alfabetycznie, Z-A'));
	 $scope.sortOptions = sortOptionsArray;
	 $scope.selectedOption = $scope.sortOptions[0];
	 //// Sort list/////
	 
	 $scope.packArray = [];	  
	 $scope.reverse = $scope.sortOptions[0].direction;
	 $scope.propertyName = $scope.sortOptions[0].value; 
	 $scope.sortBy = function(propertyName) {
		 	var sortElement = $filter('filter')(sortOptionsArray, {'key':propertyName})[0];
		    $scope.reverse = sortElement.direction;
		    $scope.propertyName = sortElement.value;
		  };
		  
	$scope.sth = function(value){
		$timeout( function(){
            return true;
        }, 2000 );
	}	  
});