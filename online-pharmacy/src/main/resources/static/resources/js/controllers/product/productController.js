/**
 * New typescript file
 */
angular.module('app.controller.product', [])
.controller('productController',
		function($scope,$state,$stateParams,$filter,cartService,productResolve,categoryResolve,oneCategoryResolve) { 
  
//    productId : number;
//    product : any;
//    packagePrice :any;
//    pack : any;
//    constructor(private route: ActivatedRoute,private productService : ProductService,private cartService : CartService,
//    private router: Router){
//      
//    }
//		console.log('categoryResolve ',categoryResolve);
//		console.log('$stateParams ',$stateParams);
		$scope.categoryName = oneCategoryResolve.url;
		$scope.category = oneCategoryResolve;
        $scope.product = productResolve;
        console.log('oneCategoryResolve',oneCategoryResolve)
//        console.log('$scope.product',$scope.product)
//        $scope.category = $filter('filter')(categoryResolve, {'id':$scope.product.id})[0];
//        console.log('$scope.category',$scope.category)
        $scope.pack = {};
//        console.log('product ' , $scope.product);
//        this.product = this.productService.getById(this.productId)
//            .subscribe(
//                data => {
//                  this.product = data.json();
////                  console.log("this.aaa " ,this.aaa);
//                  
////                    this.packagePrice = pack.price;
////                  this.products[0].file = this.products[0].file.arrayBuffer();
////                  console.log("this.product " , this.product);
////                    this.alertService.success('Registration successful', true);
////                    this.router.navigate(['/login']);
//                },
//                error => {
//                    console.log("nie udało się " ,error);
////                    this.alertService.error(error);
////                    this.loading = false;
//                });
//  }
    
    $scope.changePackage = function(event){
        var pack;
        if ($scope.product.hasOwnProperty('packages'))
//            pack = this.product.packages.filter(item => item.id == event)[0];
        	pack = $filter('filter')($scope.product.packages, {'id':event})[0];
        if (pack != undefined){
            $scope.packagePrice = pack.price;
            $scope.pack = pack;
        }
//        console.log('$scope.packagePrice',$scope.packagePrice)
//        console.log('$scope.pack',$scope.pack)
//        return event;
    }
    
    $scope.addToCart = function(){
//    console.log("addToCart")
//    var packVar = this.product.packages.filter(x => x.id == this.pack.id)[0];
    var packVar =  $filter('filter')($scope.product.packages, {'id':$scope.pack.id})[0];
    $scope.product.package = $scope.pack.id;
//      console.log("packageId " ,packageId);
//      var productCopy = this.deepCopy(this.product);
      var productCopy = angular.copy($scope.product);
      productCopy.packages = [];
      productCopy.packages.push(packVar);
//    console.log("productCopy" , productCopy)  
//      console.log("productCopy" , productCopy)
      productCopy.totalNumber = $scope.quantity;
//      console.log('productCopy.totalNumber',productCopy.totalNumber);
	  cartService.addToCart(productCopy);
//	  $state.go('shoppingCart');
//    this.router.navigate(['/shoppingCart']);
//    console.log("addToCart.length " , this.cartService.karta.cartProducts.length)
  }
    
//    function deepCopy(oldObj: any) {
//        var newObj = oldObj;
//        if (oldObj && typeof oldObj === "object") {
//            newObj = Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};
//            for (var i in oldObj) {
//                newObj[i] = this.deepCopy(oldObj[i]);
//            }
//        }
//        return newObj;
//    }
    
    $scope.changeQuantity = function(product,event){
        product.totalNumber = event.target.value;
        var refreshProduct = $filter('filter')(cartService.getCart().cartProducts, {'id':product.id})[0];
        refreshProduct.totalNumber = event.target.value;
        cartService.refreshTotalPrice();
    }
})