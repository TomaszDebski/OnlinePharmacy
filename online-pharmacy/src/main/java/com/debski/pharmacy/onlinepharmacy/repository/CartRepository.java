package com.debski.pharmacy.onlinepharmacy.repository;

import org.springframework.data.repository.CrudRepository;

import com.debski.pharmacy.onlinepharmacy.entities.Cart;


public interface CartRepository extends CrudRepository<Cart,Long> {

}
