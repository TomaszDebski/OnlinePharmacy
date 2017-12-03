/**
 * 
 */
angular.module('app.controller.medicineList', [])
.controller('medicineListController',
		function($stateParams,categoryService,$scope,cartService,$filter,Product,categoryResolve,oneCategoryResolve,
				productsResolve,productPaginationService ) { 
//	console.log('medicineList',$stateParams.name)
//	console.log('$stateParams  list',$stateParams.name)
//	if ($stateParams.name != null){
//		var productByName = categoryService.getByName($stateParams.name);
//		productByName.then(function(result){
//			$scope.products = result.data.products;
//			$scope.category = result.data;
//		})
//	}
	$scope.categoryName = $stateParams.name;
	
	$scope.totalItems = productsResolve.totalElements;
	$scope.currentPage = productsResolve.number;
	
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
//	console.log('oneCategoryResolve',oneCategoryResolve)
//	console.log('productsResolve',productsResolve)
	
	$scope.addToCart = function(product,packageId){
//		console.log('product ' +product.packages+' packageId ' +packageId.id)
		var pack = $filter('filter')(product.packages, {'id':packageId.id})[0];
	    var productCopy = angular.copy(product);
	      productCopy.packages = [];
	      productCopy.packages.push(pack);
	      console.log('productCopy',productCopy)
//	      console.log('product',product)
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
	 sortOptionsArray.push(new SortOption('price-ascending','price',false,'Cena, Najniższa do najwyższej'));
	 sortOptionsArray.push(new SortOption('price-descending','price',true,'Cena, Najwyższa do najniższej'));
//	 sortOptionsArray.push(new SortOption('created-ascending','sth','asc','Date, old to new'));
//	 sortOptionsArray.push(new SortOption('created-descending','sth','desc','Date, new to old'));
	 
	 $scope.sortOptions = sortOptionsArray;
	 $scope.selectedOption = $scope.sortOptions[0];
	 //// Sort list/////
//	 $scope.selectedDirection = $scope.sortOptions[0];
	 
	 $scope.packArray = [];	  
	 $scope.reverse = $scope.sortOptions[0].direction;
	 $scope.propertyName = $scope.sortOptions[0].value; 
	 $scope.sortBy = function(propertyName) {
		 	var sortElement = $filter('filter')(sortOptionsArray, {'key':propertyName})[0];
		    $scope.reverse = sortElement.direction;
		    $scope.propertyName = sortElement.value;
		  };
//	 $scope.goToOneItem = function(id){
//		 $state.go("visits",{patient_id:$scope.patient.id});
//		 $state.go('product');
//         this.router.navigate(['/product', id]);   
//    }
});