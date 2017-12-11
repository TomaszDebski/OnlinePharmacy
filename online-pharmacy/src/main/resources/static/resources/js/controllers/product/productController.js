/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.controller.product', [])
.controller('productController',
		function($scope,$state,$stateParams,$filter,cartService,productResolve,categoryResolve,oneCategoryResolve) { 
  
	$scope.categoryName = oneCategoryResolve.url;
	$scope.category = oneCategoryResolve;
    $scope.product = productResolve;
    $scope.pack = {};
    
    $scope.changePackage = function(event){
        var pack;
        if ($scope.product.hasOwnProperty('packages'))
        	pack = $filter('filter')($scope.product.packages, {'id':event})[0];
        if (pack != undefined){
            $scope.packagePrice = pack.price;
            $scope.pack = pack;
        }
    }
    
    $scope.addToCart = function(){
    var packVar =  $filter('filter')($scope.product.packages, {'id':$scope.pack.id})[0];
    $scope.product.package = $scope.pack.id;
      var productCopy = angular.copy($scope.product);
      productCopy.packages = [];
      productCopy.packages.push(packVar);
      productCopy.totalNumber = $scope.quantity;
	  cartService.addToCart(productCopy);
    }
    
    $scope.changeQuantity = function(product,event){
        product.totalNumber = event.target.value;
        var refreshProduct = $filter('filter')(cartService.getCart().cartProducts, {'id':product.id})[0];
        refreshProduct.totalNumber = event.target.value;
        cartService.refreshTotalPrice();
    }
})