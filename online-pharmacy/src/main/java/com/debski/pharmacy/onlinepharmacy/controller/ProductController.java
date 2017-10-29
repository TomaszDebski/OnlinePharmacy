package com.debski.pharmacy.onlinepharmacy.controller;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.Principal;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.apache.commons.lang3.StringUtils;
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
import com.debski.pharmacy.onlinepharmacy.entities.CategoryProduct;
import com.debski.pharmacy.onlinepharmacy.entities.Product;
import com.debski.pharmacy.onlinepharmacy.entities.ProductPackage;
import com.debski.pharmacy.onlinepharmacy.repository.CategoryProductRepository;
import com.debski.pharmacy.onlinepharmacy.repository.ProductRepository;
import com.fasterxml.jackson.annotation.JsonView;

@RestController
@RequestMapping("/api/product")
public class ProductController {
	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	CategoryProductRepository categoryRepository;

	@RequestMapping("/img")
    public HttpEntity<byte[]> getCarPhoto(
            @RequestParam("number") String number,
//            @RequestParam(UrlParameters.PHOTO_TYPE) String photoType
            HttpServletRequest request) {

    	byte[] data = null;
    	URL url = ClassLoader.getSystemResource("static/images/" +number +".png");
    	try{
    		if(StringUtils.isNotEmpty(number) && url != null){
    			Path path = Paths.get(url.toURI());
    			data = Files.readAllBytes(path);
    		}
			if (data == null && StringUtils.isNotEmpty(number)){
				String uploadsDir = "/my_uploads/";
				String realPathtoUploads =  request.getServletContext().getRealPath(uploadsDir); 
				File dest = new File(realPathtoUploads);
				  for (final File fileEntry : dest.listFiles()) {
			        	if (fileEntry.exists() && fileEntry.isFile())
			                System.out.println(fileEntry.getName());
			        		Path path1 = fileEntry.toPath();
			        		data = Files.readAllBytes(path1);
			            }
//			        }
			}
    	} catch (URISyntaxException | IOException e) {
			e.printStackTrace();
		}
    	HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG); //or what ever type it is
        return new HttpEntity<byte[]>(data, headers);
    }
    
	@RequestMapping(method= RequestMethod.POST)
	public void addProduct(@RequestBody Product product,@RequestParam("categoryId") Long categoryId){
		System.out.println("product packages " + product.getPackages().get(0).getName());
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
//		physiotherapistService.addPhysiotherapist(physiotherapist);
	}
	
	@JsonView(Views.Product.class)
	@RequestMapping(value="/{id}")
	public Product getProductById(@PathVariable("id") long id){
//		return physiotherapistService.findOne(id);
		return productRepository.findOne(id);
	}
	
	@JsonView(Views.CategoryProduct.class)
	@RequestMapping
	public List<CategoryProduct> getAllCategory(){
//		return physiotherapistService.getAllPhysiotherapists();
//		return (List<CategoryProduct>) categoryRepository.findAll();
		return null; 
	}

	@JsonView(Views.Product.class)
	@RequestMapping("/searchAll")
	public List<Product> getProductByName(@RequestParam("name") String name){
		return productRepository.findByNameContaining(name);
	}
	
	
	@RequestMapping("/pagination")
	public Page<List<Product>> getCategoryWithPagination(Pageable pageable,@RequestParam("categoryName") String url,
			Principal principal){
		return productRepository.findAllProductByCategoryName(pageable, url);
	}
	
	
	@RequestMapping(value = "/upload", method = RequestMethod.POST,
		    consumes = {"multipart/form-data"})
		public String executeSampleService(
		        @RequestPart("file") @Valid @NotNull @NotBlank MultipartFile file,
		        @RequestParam("categoryNumber") String categoryNumber,
		        HttpServletRequest request) {
		String uploadsDir = "/my_uploads/";
		String realPathtoUploads =  request.getServletContext().getRealPath(uploadsDir); 
        if(! new File(realPathtoUploads).exists())
        {
            new File(realPathtoUploads).mkdir();
        }

        String productNumer = categoryNumber + "_" + (findMaxNumberOfCategoryForProduct(categoryNumber) + 1);
        String filePath = realPathtoUploads + productNumer;
        File dest = new File(filePath);
        try {
			file.transferTo(dest);
		} catch (IllegalStateException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        return productNumer;
//    }
//}
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
