package com.debski.pharmacy.onlinepharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.debski.pharmacy.onlinepharmacy.entities.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product,Long> {
	
//	User findTop1ByUsername(String name);
	List<Product> findByNameContaining(String name);
	
	@Query( "from Product p where p.number like %:categoryNumber%" )
	List<Product> findAllProductByCategory(@Param("categoryNumber") String categoryNumber);

}
