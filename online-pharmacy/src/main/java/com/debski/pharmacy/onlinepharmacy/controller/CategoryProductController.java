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
import com.debski.pharmacy.onlinepharmacy.service.ICategoryProductService;
import com.fasterxml.jackson.annotation.JsonView;

/**
 * @author Tomasz Dębski
 *
 */
@RestController
@RequestMapping("/api/category")
public class CategoryProductController {

	@Autowired
	ICategoryProductService categoryProductService;

	@RequestMapping(method= RequestMethod.POST)
	public void addCategory(@RequestBody CategoryProduct category,@RequestParam("parentId") String categoryId){
		categoryProductService.addCategory(category, categoryId);
	}
	
	
	@JsonView(Views.CategoryProduct.class)
	@RequestMapping("/one")
	public CategoryProduct getUserByUsername(@RequestParam("name") String name){
		return categoryProductService.getUserByUsername(name);
	}
	
	@RequestMapping("/pagination")
	public Page<CategoryProduct> getCategoryWithPagination(Pageable pageable,@RequestParam("name") String url){
		return categoryProductService.getCategoryWithPagination(pageable, url);
	}
	
	@JsonView(Views.CategoryProductMenu.class)
	@RequestMapping
	public List<CategoryProduct> getAllMenu(){
		return categoryProductService.getAllMenu();
	}
	
	@JsonView(Views.ParentMenu.class)
	@RequestMapping("/oneCategory")
	public CategoryProduct getCategoryProductByProduct(@RequestParam("id") long id){
		return categoryProductService.getCategoryProductByProduct(id);
	}
	
}
