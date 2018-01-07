/**
 * @author Tomasz Dębski
 *
 */
angular.module('app.service.cart', [])
.factory("cartService", ['$resource','$filter', function($resource,$filter) {
	self = this;
	var karta = {
			totalPrice : 0, 
			shippingPrice : 0,
			cartProducts: [],
			firstname : '',
			lastname : '',
			address : '',
			city : '',
    		postCode : '',
    		phone : '',
    		shippingPrice : '',
    		paymentPrice : 0
	}
	var totalPrice = 0;
	return  {
		getCart : function(){
			return karta;
		},
		getTotalPrice : function(){
			return karta.totalPrice;
		},
		setTotalPrice : function(totalPriceVar){
			totalPrice = totalPriceVar;
		},
		getShippingPrice : function(){
			return karta.shippingPrice;
		},
		addToCart: function(productAdded){
			var findedProduct = $filter('filter')(karta.cartProducts, {'id':productAdded.id})[0];
		  if (productAdded.totalNumber == undefined) productAdded.totalNumber = 1;
	      if (findedProduct == undefined){
	        
	        karta.cartProducts.push(productAdded);           
	      }else{
	          findedProduct.totalNumber = parseInt(findedProduct.totalNumber) + parseInt(productAdded.totalNumber);
	      }
	      console.log('karta ', karta);
	      this.calculateTotalPrice(productAdded);    
	  },
	  
	  addToCartFromOne: function(productAdd){
			var findedProduct = $filter('filter')(karta.cartProducts, {'id':productAdded.id})[0];
	      if (findedProduct == undefined){
	        productAdded.totalNumber = 1;
	        karta.cartProducts.push(productAdded);           
	      }else{
	          productAdded.totalNumber = findedProduct.totalNumber++;
	      }
	      this.calculateTotalPrice(productAdded);  
	  },
	    updateCartStep1 : function(order){
	    	karta.firstname = order.firstname;
	    	karta.lastname = order.lastname;
	    	karta.address = order.address;
	    	karta.city = order.city;
	    	karta.postCode = order.postCode;
	    	karta.phone = order.phone;
	    },
	    
	     updateCartStep2: function(shippingOption, shippingPrice){
	        karta.shippingOption = shippingOption;
	        karta.shippingPrice = shippingPrice;
	        this.refreshTotalPrice();
	    },
	    
	    updateCartStep3: function(paymentOption){
	        karta.paymentOption = paymentOption.id;
	        karta.paymentPrice = paymentOption.price;
	    },
	    
	    removeFromCart : function(id){
	  		var product = $filter('filter')(karta.cartProducts, {'id':id})[0];
	      var index= karta.cartProducts.indexOf(product);
	      karta.cartProducts.splice(index, 1);
	      this.refreshTotalPrice();
	   },

	    calculateTotalPrice: function(productVar) {
	        karta.totalPrice += (productVar.packages[0].price * productVar.totalNumber); 
	    },
//	    
	    refreshTotalPrice : function(){
	        var sum = 0;
	        angular.forEach(karta.cartProducts, function(arrayItem) {
	        	sum += arrayItem.totalNumber == 1 ? arrayItem.packages[0].price : arrayItem.packages[0].price * arrayItem.totalNumber;
	        })
	        karta.totalPrice = sum;
	    },
	    clearCart : function(){
	    	self.karta = {
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
	    }
	}
}]);