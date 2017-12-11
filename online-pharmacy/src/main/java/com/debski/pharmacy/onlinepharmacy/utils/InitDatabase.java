package com.debski.pharmacy.onlinepharmacy.utils;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.debski.pharmacy.onlinepharmacy.repository.ProductRepository;

/**
 * @author Tomasz Dębski
 *
 */
@Component
public class InitDatabase {

	@Autowired
	ProductRepository product;
	
	@PostConstruct
	public void init(){
		
	}
}
