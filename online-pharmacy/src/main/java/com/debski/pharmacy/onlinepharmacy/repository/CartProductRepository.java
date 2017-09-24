package com.debski.pharmacy.onlinepharmacy.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.debski.pharmacy.onlinepharmacy.entities.CartProduct;


@Repository
public interface CartProductRepository extends CrudRepository<CartProduct,Long> {
	
//	User findTop1ByUsername(String name);

}
