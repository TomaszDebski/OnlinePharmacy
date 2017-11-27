/**
 * 
 */

angular.module('app.service.cart', [])
.factory("cartService", ['$resource','$filter', function($resource,$filter) {
	self = this;
	var karta = {
//			id : 0,
			totalPrice : 0, 
			shippingPrice : 0,
			cartProducts: [],
			firstname : '',
			lastname : '',
			street : '',
			city : '',
    		postCode : '',
    		phone : '',
    		
    		shippingPrice : '',
	}
	var totalPrice = 0;
	return  {
		getCart : function(){
			return karta;
		},
		getTotalPrice : function(){
//			console.log('totalPrice',totalPrice)
			return karta.totalPrice;
		},
		setTotalPrice : function(totalPriceVar){
//			console.log('totalPriceVar',totalPriceVar)
			totalPrice = totalPriceVar;
		},
		getShippingPrice : function(){
//			console.log('totalPrice',totalPrice)
			return karta.shippingPrice;
		},
		addToCart: function(productAdded){
//			console.log('productAdded ',productAdded);
//			console.log('karta ', karta);
			var findedProduct = $filter('filter')(karta.cartProducts, {'id':productAdded.id})[0];
//			console.log('findedProduct ', findedProduct);
		  if (productAdded.totalNumber == undefined) productAdded.totalNumber = 1;
	      if (findedProduct == undefined){
	        
	        karta.cartProducts.push(productAdded);           
//			console.log('karta ', karta);
	      }else{
//	    	  console.log('productAdded.totalNumber',productAdded.totalNumber)
//	    	  console.log('findedProduct.totalNumber',findedProduct.totalNumber)
//	    	  console.log('productAdded.totalNumber',productAdded.totalNumber == undefined)
//	    	  console.log('productAdded.totalNumber is nan',is(productAdded.totalNumber))
	          findedProduct.totalNumber = parseInt(findedProduct.totalNumber) + parseInt(productAdded.totalNumber);
//	    	  productAdded.totalNumber
//	    	  console.log('productAdded.totalNumber',productAdded.totalNumber)
	      }
//	      console.log('karta ', karta);
	      this.calculateTotalPrice(productAdded);    
	  },
	  
	  addToCartFromOne: function(productAdd){
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
	    updateCartStep1 : function(order){
//	    	console.log('order',order)
//	    	var cart = this.getCart();
	    	karta.firstname = order.firstname;
	    	karta.lastname = order.lastname;
	    	karta.street = order.street;
	    	karta.city = order.city;
	    	karta.postCode = order.postCode;
	    	karta.phone = order.phone;
//	        console.log('step1 karta ' , this.karta);
	    },
//	    
	     updateCartStep2: function(shippingOption, shippingPrice){
	        karta.shippingOption = shippingOption;
	        karta.shippingPrice = shippingPrice;
	        this.refreshTotalPrice();
//	        console.log('step2 karta ' , this.karta);
	    },
//	    
	    updateCartStep3: function(paymentOption){
	        karta.paymentOption = paymentOption.id;
	        karta.paymentPrice = paymentOption.price;
//	        this.refreshTotalPrice();
//	        console.log('step2 karta ' , this.karta);
	    },
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
//	    	console.log('productVar.packages[0].price',productVar.packages[0].price)
//	    	console.log('productVar.number',productVar.totalNumber)
//	    	console.log('productVar.number',angular.isUndefined(productVar.number))
	        karta.totalPrice += (productVar.packages[0].price * productVar.totalNumber); 
//	        console.log(" karta.totalPrice " ,  karta.totalPrice);
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