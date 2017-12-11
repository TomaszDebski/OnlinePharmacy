/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.searchAll', [])
.controller('searchAllController',
		function($scope,productByNameResolve,productUtilsService,$state,$filter) { 
//	console.log('$scope.$parent',$scope.$parent.searchWord);
	$scope.findedProducts = productByNameResolve;
	$scope.searchWordToDisplay = $scope.$parent.searchWord;
	$scope.search = function(searchWord){
		var productByName = productUtilsService.getProductsByName(searchWord)
		$scope.$parent.searchWord = searchWord;
		productByName.then(function(result){
			$scope.searchWordToDisplay = searchWord;
			$scope.findedProducts = result;
		})
	}
	
	$scope.goToOneProduct = function(productId){
		$state.go('product')
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
	 $scope.sortOptions = sortOptionsArray;
	 $scope.selectedOption = $scope.sortOptions[0];
	 
	 //// Sort list/////
	 
	 $scope.packArray = [];	  
	 $scope.reverse = $scope.sortOptions[0].direction;
	 $scope.propertyName = $scope.sortOptions[0].value; 
	 $scope.sortBy = function(propertyName) {
		 	var sortElement = $filter('filter')(sortOptionsArray, {'key':propertyName})[0];
//		 	console.log('ddddddddd');
		    $scope.reverse = sortElement.direction;
		    $scope.propertyName = sortElement.value;
	
	 };
	
	
});
