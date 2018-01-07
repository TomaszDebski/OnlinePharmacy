package com.debski.pharmacy.onlinepharmacy.service;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.debski.pharmacy.onlinepharmacy.entities.CategoryProduct;
import com.debski.pharmacy.onlinepharmacy.entities.Product;
import com.debski.pharmacy.onlinepharmacy.entities.ProductPackage;
import com.debski.pharmacy.onlinepharmacy.repository.CategoryProductRepository;
import com.debski.pharmacy.onlinepharmacy.repository.ProductRepository;

/**
 * @author Tomasz Dębski
 *
 */
@Service
public class ProductService implements IProductService {
	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	CategoryProductRepository categoryRepository;


	@Override
	public byte[] getCarPhoto(String number, String realPath) {
		System.out.println("numberrr " + number);
		byte[] data = null;
    	URL url = ClassLoader.getSystemResource("static/images/" +number +".png");
    	if (url == null){
    		url = ClassLoader.getSystemResource("static/images/" +number +".jpg");
    	}
    	try{
    		if(StringUtils.isNotEmpty(number) && url != null){
    			Path path = Paths.get(url.toURI());
    			data = Files.readAllBytes(path);
    		}
			if (data == null && StringUtils.isNotEmpty(number)){
				String realPathtoUploads =  realPath; 
				File dest = new File(realPathtoUploads);
				  for (final File fileEntry : dest.listFiles()) {
			        	if (fileEntry.exists() && fileEntry.isFile())
			                System.out.println(fileEntry.getName());
			        		Path path1 = fileEntry.toPath();
			        		data = Files.readAllBytes(path1);
			            }
			}
    	} catch (URISyntaxException | IOException e) {
			e.printStackTrace();
		}
    	return data;
	}

	@Override
	public void addProduct(Product product, Long categoryId) {
		CategoryProduct cp = categoryRepository.findOne(categoryId);
		if (cp != null){
			product.setNumber(cp.getNumber() + "_" + (findMaxNumberOfCategoryForProduct(cp.getNumber())+1));
			product.setCategoryProduct(cp);
			product.setId(null);
			for (ProductPackage pack : product.getPackages()) {
				pack.setId(null);
			}
			productRepository.save(product);			
		}else{
			System.out.println("Brak kategorii");
		}
	}

	@Override
	public Product getProductById(long id) {
		return productRepository.findOne(id);
	}

	@Override
	public List<Product> getProductByName(String name) {
		return productRepository.findByNameContaining(name);
	}

	@Override
	public Page<List<Product>> getCategoryWithPagination(Pageable pageable, String url) {
		return productRepository.findAllProductByCategoryName(pageable, url);
	}

	@Override
	public String getNameForFile(MultipartFile file, String categoryNumber, HttpServletRequest request) {
		String uploadsDir = "/my_uploads/";
		String realPathtoUploads =  request.getServletContext().getRealPath(uploadsDir); 
        if(! new File(realPathtoUploads).exists())
        {
            new File(realPathtoUploads).mkdir();
        }
        System.out.println("categoryNumber2 " + categoryNumber);
        String productNumer = categoryNumber + "_" + (findMaxNumberOfCategoryForProduct(categoryNumber) + 1);
        System.out.println("productNumer" + productNumer);
        String filePath = realPathtoUploads + productNumer;
        File dest = new File(filePath);
        try {
			file.transferTo(dest);
		} catch (IllegalStateException | IOException e) {
			e.printStackTrace();
		}
        return productNumer;

	}
	
	private int findMaxNumberOfCategoryForProduct(String categoryNumber){
		List<Product> findedProduct = null;
        if (categoryNumber != null){
        	findedProduct = productRepository.findAllProductByCategory(categoryNumber);
        }
        int maxNumber = 0;
        if (findedProduct != null){
	        for (Product product : findedProduct) {
	        	int tmpNumber = Integer.parseInt(product.getNumber().substring(product.getNumber().indexOf(categoryNumber) + 5 , product.getNumber().length()));
	
	        	if (maxNumber == 0 || maxNumber < tmpNumber )
				maxNumber = tmpNumber;
			}
        }
        return maxNumber;
	}

}
