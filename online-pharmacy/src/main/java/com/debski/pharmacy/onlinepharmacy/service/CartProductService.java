package com.debski.pharmacy.onlinepharmacy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.debski.pharmacy.onlinepharmacy.entities.CategoryProduct;
import com.debski.pharmacy.onlinepharmacy.repository.CategoryProductRepository;

/**
 * @author Tomasz Dębski
 *
 */
@Service
public class CartProductService implements ICategoryProductService {

	@Autowired
	CategoryProductRepository categoryRepository;
	
	@Override
	public void addCategory(CategoryProduct category, String categoryId) {
		CategoryProduct parentCategory = categoryRepository.findOne(Long.parseLong(categoryId));
		if (parentCategory != null){
			category.setParent(parentCategory);
		}
		categoryRepository.save(category);
	}

	@Override
	public CategoryProduct getUserByUsername(String name) {
		return categoryRepository.findTop1ByUrl(name);
	}

	@Override
	public Page<CategoryProduct> getCategoryWithPagination(Pageable pageable, String url) {
		return categoryRepository.findTop1ByUrl(pageable, url);
	}

	@Override
	public List<CategoryProduct> getAllMenu() {
		return (List<CategoryProduct>) categoryRepository.findAllWithChildren();
	}

	@Override
	public CategoryProduct getCategoryProductByProduct(long id) {
		return categoryRepository.findByProductId(id);
	}

}
