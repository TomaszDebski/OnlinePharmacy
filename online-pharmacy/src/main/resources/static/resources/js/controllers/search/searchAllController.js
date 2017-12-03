/**
 * 
 */

angular.module('app.controller.searchAll', [])
.controller('searchAllController',
		function($scope,productByNameResolve,productUtilsService,$state,$filter) { 
//	categoryService.setCategories(categoryResolve);
//	console.log('home',categoryService.getCategories())
	
//	console.log('productByNameResolve',productByNameResolve);	
	console.log('$scope.$parent',$scope.$parent.searchWord);
	$scope.findedProducts = productByNameResolve;
	$scope.searchWordToDisplay = $scope.$parent.searchWord;
	$scope.search = function(searchWord){
		var productByName = productUtilsService.getProductsByName(searchWord)
//		console.log('jestem w search w userPanelController',$scope.searchWord)
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
		 	console.log('ddddddddd');
		    $scope.reverse = sortElement.direction;
		    $scope.propertyName = sortElement.value;
	
	 };
	
	
});
//    productId : number;
//    product : any;
//    order : any = {firstName: "", lastName: "", street:"",city:"",postCode:"",phone:""};
//    searchWord : string = "";
//    findedProducts : Array<Product> = new Array<Product>();
//    
//    constructor(private route: ActivatedRoute,private cartService : CartService, private router: Router,
//    private productService : ProductService){
//        this.searchWord = this.route.snapshot.params['searchWord'];
//        this.searchByName();
//    }
//    
//    private search(){
//        this.searchByName()
//    }
//    
//    private searchByName(){
//        this.productService.getByName(this.searchWord)
//            .subscribe(
//                data => {
//                  console.log("udało się " ,data.json());
//                    this.findedProducts = data.json();
//                    console.log("findedProducts " ,this.findedProducts);
//                },
//                error => {
//                    console.log("nie udało się " ,error); 
//                });
//    }
//    
////    goToNextStep(order){
////        //this.saveCart(order);
////        this.cartService.updateCartStep1(order);
////        this.router.navigate(['/order-option']);
////    }
////    
////    backToShipping(){
////        this.router.navigate(['/shoppingCart']);
////    }
//    
//    
//    
//    private saveCart(order){
//        let cart : Cart = new Cart();
//        console.log("order.firstName "  ,this.order);
//        cart.firstName = order.firstName;
//        cart.lastName = order.lastName;
//        console.log("new cart " ,cart);
//        this.cartService.saveCart(cart).subscribe(
//                data => {
//                  console.log("udało się ");
//                },
//                error => {
//                    console.log("nie udało się " ,error);
//                });;
//    }
//    
//    ngOnInit(){
////        this.productId =  +this.route.snapshot.params['id']; 
////        console.log('product ' , this.productId);
////        this.product = this.productService.getById(this.productId)
////            .subscribe(
////                data => {
////                  console.log("udało się " ,data.json());
////                  this.product = data.json();
//////                  this.products[0].file = this.products[0].file.arrayBuffer();
////                  console.log("this.product " , this.product);
//////                    this.alertService.success('Registration successful', true);
//////                    this.router.navigate(['/login']);
////                },
////                error => {
////                    console.log("nie udało się " ,error);
//////                    this.alertService.error(error);
//////                    this.loading = false;
////                });
//  }
//}