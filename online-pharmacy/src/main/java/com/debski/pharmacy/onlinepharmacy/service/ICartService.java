package com.debski.pharmacy.onlinepharmacy.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.debski.pharmacy.onlinepharmacy.entities.Cart;

/**
 * @author Tomasz Dębski
 *
 */
public interface ICartService {
	
	void addCart(Cart cart,String userLogin);
	
	Cart getCartById(long id);
	
	Page<Cart> getAllCartForUser(Pageable pageable,Long id);

}
