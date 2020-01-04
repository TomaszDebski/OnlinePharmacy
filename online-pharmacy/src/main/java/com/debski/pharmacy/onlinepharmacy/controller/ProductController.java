package com.debski.pharmacy.onlinepharmacy.controller;

import java.security.Principal;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.debski.pharmacy.onlinepharmacy.configuration.Views;
import com.debski.pharmacy.onlinepharmacy.entities.Product;
import com.debski.pharmacy.onlinepharmacy.service.IProductService;
import com.fasterxml.jackson.annotation.JsonView;

/**
 * @author Tomasz Dębski
 *
 */
@RestController
@RequestMapping("/api/product")
public class ProductController {
	
	@Autowired
	IProductService productService;

	@RequestMapping("/img")
    public HttpEntity<byte[]> getCarPhoto(
            @RequestParam("number") String number,
            HttpServletRequest request) {

    	byte[] data = null;
		String uploadsDir = "/my_uploads/";
    	data = productService.getCarPhoto(number, request.getServletContext().getRealPath(uploadsDir));
    	HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG); 
        return new HttpEntity<byte[]>(data, headers);
    }
    
	@RequestMapping(method= RequestMethod.POST)
	public void addProduct(@RequestBody Product product,@RequestParam("categoryId") Long categoryId){
		productService.addProduct(product, categoryId);
	}
	
	@JsonView(Views.Product.class)
	@RequestMapping(value="/{id}")
	public Product getProductById(@PathVariable("id") long id){
		return productService.getProductById(id);
	}
	
	@JsonView(Views.Product.class)
	@RequestMapping("/searchAll")
	public List<Product> getProductByName(@RequestParam("name") String name){
		return productService.getProductByName(name);
	}
	
	@RequestMapping("/pagination")
	public Page<List<Product>> getCategoryWithPagination(Pageable pageable,@RequestParam("categoryName") String url,
			Principal principal){
		return productService.getCategoryWithPagination(pageable, url);
	}
	
	@RequestMapping(value = "/upload", method = RequestMethod.POST,
		    consumes = {"multipart/form-data"})
	public String executeSampleService(
		        @RequestPart("file") @Valid @NotNull @NotBlank MultipartFile file,
		        @RequestParam("categoryNumber") String categoryNumber,
		        HttpServletRequest request) {
	return productService.getNameForFile(file, categoryNumber, request);
		}
}
