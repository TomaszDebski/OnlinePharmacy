package com.debski.pharmacy.onlinepharmacy.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.debski.pharmacy.onlinepharmacy.entities.Cart;
import com.debski.pharmacy.onlinepharmacy.entities.CartProduct;
import com.debski.pharmacy.onlinepharmacy.entities.User;
import com.debski.pharmacy.onlinepharmacy.repository.CartProductRepository;
import com.debski.pharmacy.onlinepharmacy.repository.CartRepository;
import com.debski.pharmacy.onlinepharmacy.repository.CategoryProductRepository;
import com.debski.pharmacy.onlinepharmacy.repository.ProductRepository;
import com.debski.pharmacy.onlinepharmacy.repository.UserRepository;

/**
 * @author Tomasz Dębski
 *
 */
@Service
public class CartService implements ICartService {

	@Autowired
	CartRepository cartRepository;
	
	@Autowired
	ProductRepository productRepository; 
	
	@Autowired
	CartProductRepository cartProductRepository;
	
	@Autowired
	CategoryProductRepository categoryRepository;
	
	@Autowired
	UserRepository userRepository;

	@Override
	public void addCart(Cart cart, String userLogin) {
		if (cart.getId() == null || cart.id == 0){
			String userName = userLogin;
			if (userName != null){
				User user = userRepository.findTop1ByUsername(userName);
				cart.setUser(user);
				cart.setLastName(user.getLastname());
				cart.setFirstName(user.getFirstname());
				cart.setEmail(user.getUserDetails().getEmail());
			}
			cart.setCartDate(new Date());
			cart.setInsertedDate(new Date());
			cartRepository.save(cart);
			if (cart.getCartProducts() != null){
				for(CartProduct product : cart.getCartProducts()){
					product.setCart(cart);
					cartProductRepository.save(product);
				}
			}
		}
	}

	@Override
	public Cart getCartById(long id) {
		return cartRepository.findOne(id);
	}

	@Override
	public Page<Cart> getAllCartForUser(Pageable pageable, Long id) {
		return cartRepository.findCartByUser(pageable, id);
	}
	
	
}
