/**
 * New typescript file
 */
angular.module('app.controller.four_orderSummary', [])
.controller('four_orderSummaryController',function($scope,$http,$rootScope,$location,$window,$translate,
		$state,cartService,$filter,cartResourceService
//		,authService
		) {
	var $translate = $filter('translate');
//    productId : number;
//    product : any; 
    $scope.cart =cartService.getCart();
    $scope.tatalPrice = cartService.getTotalPrice();
    cartService.getCart().stages[4].isBegin = true;
//    console.log('cartService.getTotalPrice()',cartService.getTotalPrice());	
    $scope.shippingPrice = cartService.getShippingPrice();
//    console.log('cartService.shippingPrice',cartService.getShippingPrice());
    console.log('$scope.cart',$scope.cart)
    console.log('$scope.cart totalNumber	',$scope.cart.cartProducts[0])
//    swal: any;
//    paymentOption : string = "";
//    paymentOptions: string[] = ["send by courier","Personal collection"];
    
    
    $scope.saveOrder = function(){
    	 console.log('cartService.getCart()',cartService.getCart());
    	 angular.forEach(cartService.getCart().cartProducts, function(key,value){
//    		 console.log('prodct key',key);
    		 if (key.price == undefined || key.price == null){
    			 key.price = key.packages[0].price;
    		 }
    		 key.id = null;
    		 key.categoryProduct = null;
//    		 console.log('key',key.id)
//    		 console.log('value',value)
    	 })
    	 cartResourceService.save(cartService.getCart(),function(data){
         	console.log('dodano Cart',data)
         	swal($translate('cart.added'), $translate('cart.cart_was_added'), "success");
         })
//        this.saveCart();
//        this._cookieService.put('pierwszy','wartosc');
       
    }
    
    $scope.backToStep3 = function(){
//        let deliveryOption : string = this.setDeliveryOption(value);
//        this.cartService.updateCartStep2(deliveryOption);
    	$state.go('order.payment');
    }
    
//     function saveCart(){
//       
//    }
    
//    private setDeliveryOption(value : number){
//        return this.paymentOptions[value];
//    }
    
    
//    ngOnInit(){
//        cartService.getCart().stages[5].isBegin = true;
//        this.productId =  +this.route.snapshot.params['id']; 
//        console.log('product ' , this.productId);
//        this.product = this.productService.getById(this.productId)
//            .subscribe(
//                data => {
//                  console.log("udało się " ,data.json());
//                  this.product = data.json();
////                  this.products[0].file = this.products[0].file.arrayBuffer();
//                  console.log("this.product " , this.product);
////                    this.alertService.success('Registration successful', true);
////                    this.router.navigate(['/login']);
//                },
//                error => {
//                    console.log("nie udało się " ,error);
////                    this.alertService.error(error);
////                    this.loading = false;
//                });
//  }
})