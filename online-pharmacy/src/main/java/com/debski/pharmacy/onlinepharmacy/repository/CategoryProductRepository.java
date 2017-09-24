package com.debski.pharmacy.onlinepharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.debski.pharmacy.onlinepharmacy.entities.CategoryProduct;


@Repository
public interface CategoryProductRepository extends CrudRepository<CategoryProduct,Long> {
	
	CategoryProduct findTop1ByUrl(String url);
	
	@Query( "select distinct m from CategoryProduct m left join m.subcategory where m.parent is null" )
	List<CategoryProduct> findAllWithChildren();

}
