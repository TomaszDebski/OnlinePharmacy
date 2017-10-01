/**
 * 
 */
angular.module('app.controller.medicineList', [])
.controller('medicineListController',
		function($stateParams,categoryService,$scope,cartService,$filter,Product) { 
//	console.log('medicineList',$stateParams.name)
//	console.log('$stateParams',$stateParams)
	if ($stateParams.name != null){
		var productByName = categoryService.getByName($stateParams.name);
		productByName.then(function(result){
//			console.log('result.data ',result.data)
			$scope.products = result.data.products;
			$scope.category = result.data;
		})
	}
	
	$scope.addToCart = function(product,packageId){
		var pack = $filter('filter')(product.packages, {'id':packageId.id})[0];
	    var productCopy = angular.copy(product);
	      productCopy.packages = [];
	      productCopy.packages.push(pack);
//	      console.log('productCopy',productCopy)
//	      console.log('product',product)
	    cartService.setTotalPrice(100);
		cartService.addToCart(productCopy);
		$scope.cart = cartService.getCart();
	  }
		$scope.isGrid = true;
	 $scope.changeBetweenGridAndList = function(changeToGrid){
	        $scope.isGrid = !$scope.isGrid
	    }
	 
	 ////// Sort list/////
	 
	 SortOption = function(key,value,direction,text){
		 this.key = key;
	     this.value = value;
	     this.direction = direction;
	     this.text = text;
	 }
	 sortOptionsArray = [];
	 sortOptionsArray.push(new SortOption('name-ascending','name','asc','Alfabetycznie, A-Z'));
	 sortOptionsArray.push(new SortOption('name-descending','name','desc','Alfabetycznie, Z-A'));
	 sortOptionsArray.push(new SortOption('price-ascending','price','asc','Cena, Najniższa do najwyższej'));
	 sortOptionsArray.push(new SortOption('price-descending','price','desc','Cena, Najwyższa do najniższej'));
	 sortOptionsArray.push(new SortOption('created-ascending','sth','asc','Date, old to new'));
	 sortOptionsArray.push(new SortOption('created-descending','sth','desc','Date, new to old'));
	 
	 $scope.sortOptions = sortOptionsArray;
	 //// Sort list/////
	 
//	 $scope.goToOneItem = function(id){
//		 $state.go("visits",{patient_id:$scope.patient.id});
//		 $state.go('product');
//         this.router.navigate(['/product', id]);   
//    }
});