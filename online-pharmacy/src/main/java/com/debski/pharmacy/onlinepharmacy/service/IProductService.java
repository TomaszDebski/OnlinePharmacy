package com.debski.pharmacy.onlinepharmacy.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import com.debski.pharmacy.onlinepharmacy.entities.Product;
/**
 * @author Tomasz Dębski
 *
 */
public interface IProductService {
	
	byte[] getCarPhoto(String number, String realPath);
	
	void addProduct(Product product,Long categoryId);
	
	public Product getProductById(long id);
	
	public List<Product> getProductByName(String name);
	
	public Page<List<Product>> getCategoryWithPagination(Pageable pageable,String url);
	
	public String getNameForFile(MultipartFile file,String categoryNumber,
	        HttpServletRequest request);
}
