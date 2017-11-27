package com.debski.pharmacy.onlinepharmacy.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.debski.pharmacy.onlinepharmacy.entities.Cart;
import com.debski.pharmacy.onlinepharmacy.entities.Product;


public interface CartRepository extends CrudRepository<Cart,Long> {

	@Query( "from Cart c where c.user.id = :id" )
	Page<Cart> findCartByUser(Pageable page, @Param("id") Long id);
}
