package com.debski.pharmacy.onlinepharmacy.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.debski.pharmacy.onlinepharmacy.configuration.Views;
import com.debski.pharmacy.onlinepharmacy.entities.CategoryProduct;
import com.debski.pharmacy.onlinepharmacy.entities.User;
import com.debski.pharmacy.onlinepharmacy.repository.CategoryProductRepository;
import com.fasterxml.jackson.annotation.JsonView;

/**
 * @author Tomasz Dębski
 *
 */
@RestController
@RequestMapping("/api/category")
public class CategoryProductController {

	@Autowired
	CategoryProductRepository categoryRepository;

	@RequestMapping(method= RequestMethod.POST)
	public void addCategory(@RequestBody CategoryProduct category,@RequestParam("parentId") String categoryId){
		CategoryProduct parentCategory = categoryRepository.findOne(Long.parseLong(categoryId));
		if (parentCategory != null){
			category.setParent(parentCategory);
		}
//		System.out.println(user.getFirstname());
		categoryRepository.save(category);
//		physiotherapistService.addPhysiotherapist(physiotherapist);
	}
	
	@JsonView(Views.CategoryProduct.class)
	@RequestMapping(value="/{id}")
	public User getCategoryById(@PathVariable("id") long id){
//		return physiotherapistService.findOne(id);
		return null;
	}
	
	@JsonView(Views.CategoryProduct.class)
	@RequestMapping("/one")
	public CategoryProduct getUserByUsername(@RequestParam("name") String url){
		return categoryRepository.findTop1ByUrl(url);
//		return null;
	}
	
	@RequestMapping("/pagination")
	public Page<CategoryProduct> getCategoryWithPagination(Pageable pageable,@RequestParam("name") String url,
			Principal principal){
		return categoryRepository.findTop1ByUrl(pageable, url);
	}
	
	@JsonView(Views.CategoryProductMenu.class)
	@RequestMapping
	public List<CategoryProduct> getAllMenu(){
		return (List<CategoryProduct>) categoryRepository.findAllWithChildren();
	}
	
	@JsonView(Views.ParentMenu.class)
	@RequestMapping("/oneCategory")
	public CategoryProduct getCategoryProductByProduct(@RequestParam("id") long id){
		return categoryRepository.findByProductId(id);
	}
	
}
