package com.debski.pharmacy.onlinepharmacy.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.debski.pharmacy.onlinepharmacy.entities.CategoryProduct;


@Repository
public interface CategoryProductRepository extends CrudRepository<CategoryProduct,Long> {
	
	CategoryProduct findTop1ByUrl(String url);
	
	Page<CategoryProduct> findTop1ByUrl(Pageable pageable, String url);
	
	@Query( "select distinct m from CategoryProduct m left join m.subcategory where m.parent is null" )
	List<CategoryProduct> findAllWithChildren();

	@Query( "from CategoryProduct cp left join cp.products p where p.id = :id")
	CategoryProduct findByProductId(@Param("id")long id);

	

}
