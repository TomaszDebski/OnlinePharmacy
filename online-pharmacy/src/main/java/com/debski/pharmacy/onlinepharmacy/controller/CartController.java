package com.debski.pharmacy.onlinepharmacy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.debski.pharmacy.onlinepharmacy.configuration.Views;
import com.debski.pharmacy.onlinepharmacy.entities.Cart;
import com.debski.pharmacy.onlinepharmacy.entities.CartProduct;
import com.debski.pharmacy.onlinepharmacy.entities.User;
import com.debski.pharmacy.onlinepharmacy.repository.CartProductRepository;
import com.debski.pharmacy.onlinepharmacy.repository.CartRepository;
import com.debski.pharmacy.onlinepharmacy.repository.CategoryProductRepository;
import com.debski.pharmacy.onlinepharmacy.repository.ProductRepository;
import com.fasterxml.jackson.annotation.JsonView;

@RestController
@RequestMapping("/api/cart")
public class CartController {

	@Autowired
	CartRepository cartRepository;
	
	@Autowired
	ProductRepository productRepository; 
	
	@Autowired
	CartProductRepository cartProductRepository;
	
	@Autowired
	CategoryProductRepository categoryRepository;
	
	@RequestMapping(method= RequestMethod.POST)
	public void addCart(@RequestBody Cart cart){
		if (cart.getId() == null || cart.id == 0){
			System.out.println("cart.getProducts " + cart);
			cartRepository.save(cart);
			if (cart.getCartProducts() != null){
				for(CartProduct product : cart.getCartProducts()){
					product.setCart(cart);
					cartProductRepository.save(product);
				}
			}
		}
	}
	
//	@RequestMapping(method= RequestMethod.POST)
//	public void saveOrder(@RequestBody Cart cart){
//		
//	}
	
	@JsonView(Views.User.class)
	@RequestMapping(value="/{id}")
	public Cart getCartById(@PathVariable("id") long id){
		return cartRepository.findOne(id);
	}
	
//	@JsonView(Views.VisitsPhysiotherapist.class)
	@RequestMapping
	public List<User> getAllPhysiotherapists(){
//		return physiotherapistService.getAllPhysiotherapists();
		return null;
	}

//	@JsonView(Views.User.class)
//	@RequestMapping("/byUsername/{name}")
//	public User getUserByUsername(@PathVariable("name") String name){
////		return physiotherapistService.getPhysiotherapistByUsername(name);
//		return null;
//	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.PUT)
	public void updateUser(@PathVariable("id") long id,@RequestBody User user){
//		physiotherapistService.updatePhysiotherapist(id, physiotherapist);
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
	public void deleteUser(@PathVariable("id") long id){
	}
}
