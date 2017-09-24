/**
 * 
 */

angular.module('app.service.cart', [])
.factory("cartService", ['$resource','$filter', function($resource,$filter) {
	self = this;
	var karta = {id : 0,totalPrice : 0, cartProducts: []};
	var totalPrice = 0;
	return  {
		getCart : function(){
			return karta;
		},
		getTotalPrice : function(){
			console.log('totalPrice',totalPrice)
			return totalPrice;
		},
		setTotalPrice : function(totalPriceVar){
			console.log('totalPriceVar',totalPriceVar)
			totalPrice = totalPriceVar;
		},
		addToCart: function(productAdded){
//			console.log('productAdded ',productAdded);
//			console.log('karta ', karta);
			var findedProduct = $filter('filter')(karta.cartProducts, {'id':productAdded.id})[0];
//			console.log('findedProduct ', findedProduct);
	      if (findedProduct == undefined){
	        productAdded.totalNumber = 1;
	        karta.cartProducts.push(productAdded);           
//			console.log('karta ', karta);
	      }else{
	          productAdded.totalNumber = findedProduct.totalNumber++;
	      }
	      console.log('karta ', karta);
	      this.calculateTotalPrice(productAdded);    
	  },
	  
//	  getCart() : Cart{
//	    return this.karta; 
//	  }
//	    
//	    updateCartStep1(order: any){
//	        this.karta.firstName = order.firstName;
//	        this.karta.lastName = order.lastName;
//	        this.karta.street = order.street;
//	        this.karta.city = order.city;
//	        this.karta.postCode = order.postCode;
////	        console.log('step1 karta ' , this.karta);
//	    }
//	    
//	     updateCartStep2(shippingOption: any, shippingPrice: any){
//	        this.karta.shippingOption = shippingOption;
//	         this.karta.shippingPrice = shippingPrice;
//	         this.refreshTotalPrice();
////	        console.log('step2 karta ' , this.karta);
//	    }
//	    
//	    updateCartStep3(paymentOption: any){
//	        this.karta.paymentOption = paymentOption.id;
//	        this.karta.paymentPrice = paymentOption.price;
//	         this.refreshTotalPrice();
////	        console.log('step2 karta ' , this.karta);
//	    }
//	    
//	    
//	//   private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'}); 
//	    createCart() {
//	        let cart : Cart = this.getCart();
////	        console.log('przesyłąm Cart' , cart);
//	        return this.http.post('http://localhost:8080/api/cart',cart); 
//	    }
//	    
//	     saveCart(cart : Cart) {
////	        let cart : Cart = this.getCart();
////	        console.log('przesyłąm Cart' , cart);
//	        return this.http.post('http://localhost:8080/api/cart',cart); 
//	    }
//	    
	    removeFromCart : function(id){
	  		var product = $filter('filter')(karta.cartProducts, {'id':id})[0];
	      var index= karta.cartProducts.indexOf(product);
	      karta.cartProducts.splice(index, 1);
	      this.refreshTotalPrice();
	   },
//
	    calculateTotalPrice: function(productVar) {
//	        let calcPackage : any = productVar.packages.filter(packId => packId.id == productVar.package)[0];
//	    	this.setTotalPrice(productVar.packages[0].price);
	        karta.totalPrice += productVar.packages[0].price; 
	        console.log(" karta.totalPrice " ,  karta.totalPrice);
	    },
//	    
	    refreshTotalPrice : function(){
	        var sum = 0;
//	        sum += karta.shippingPrice;
//	        sum += karta.paymentPrice;
	        angular.forEach(karta.cartProducts, function(arrayItem) {
	        	sum += arrayItem.totalNumber == 1 ? arrayItem.packages[0].price : arrayItem.packages[0].price * arrayItem.totalNumber;
	        })
//	        this.karta.cartProducts.forEach( function (arrayItem){
//	                sum += arrayItem.totalNumber == 1 ? Number(arrayItem.packages[0].price) : Number(arrayItem.packages[0].price) * arrayItem.totalNumber;
//	        });
	        console.log('sum',sum);
	        karta.totalPrice = sum;
	    }
	}
}]);