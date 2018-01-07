package com.debski.pharmacy.onlinepharmacy.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.debski.pharmacy.onlinepharmacy.entities.CategoryProduct;

/**
 * @author Tomasz Dębski
 *
 */
public interface ICategoryProductService {

	void addCategory(CategoryProduct category,String categoryId);
	
	CategoryProduct getUserByUsername(String name);
	
	Page<CategoryProduct> getCategoryWithPagination(Pageable pageable,String url);
	
	List<CategoryProduct> getAllMenu();
	
	CategoryProduct getCategoryProductByProduct(long id);
}
