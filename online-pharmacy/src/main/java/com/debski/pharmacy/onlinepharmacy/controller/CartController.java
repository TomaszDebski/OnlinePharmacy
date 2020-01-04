package com.debski.pharmacy.onlinepharmacy.controller;

import java.security.Principal;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.debski.pharmacy.onlinepharmacy.configuration.Views;
import com.debski.pharmacy.onlinepharmacy.entities.Cart;
import com.debski.pharmacy.onlinepharmacy.entities.CartProduct;
import com.debski.pharmacy.onlinepharmacy.entities.User;
import com.debski.pharmacy.onlinepharmacy.repository.CartProductRepository;
import com.debski.pharmacy.onlinepharmacy.repository.CartRepository;
import com.debski.pharmacy.onlinepharmacy.repository.CategoryProductRepository;
import com.debski.pharmacy.onlinepharmacy.repository.ProductRepository;
import com.debski.pharmacy.onlinepharmacy.repository.UserRepository;
import com.debski.pharmacy.onlinepharmacy.service.ICartService;
import com.fasterxml.jackson.annotation.JsonView;

/**
 * @author Tomasz Dębski
 *
 */
@RestController
@RequestMapping("/api/cart")
public class CartController {

	
	@Autowired
	ICartService cartService;
	
	@RequestMapping(method= RequestMethod.POST)
	public void addCart(@RequestBody Cart cart,Principal principal){
		cartService.addCart(cart, principal.getName());
	}
	
	@JsonView(Views.UserCart.class)
	@RequestMapping(value="/{id}")
	public Cart getCartById(@PathVariable("id") long id){
		return cartService.getCartById(id);
	}
	
	@RequestMapping("/pagination")
	public Page<Cart> getAllCartForUser(Pageable pageable,@RequestParam("userId") Long id){
		return cartService.getAllCartForUser(pageable, id);
		
	}

}
