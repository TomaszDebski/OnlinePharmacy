package com.debski.pharmacy.onlinepharmacy.utils;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.debski.pharmacy.onlinepharmacy.repository.ProductRepository;


@Component
public class InitDatabase {

	@Autowired
	ProductRepository product;
	
	@PostConstruct
	public void init(){
//		try {
//			Path path = Paths.get(ClassLoader.getSystemResource("static/images/one.png").toURI());
//			File file = path.toFile();
//			byte[] data = null;
//			try {
//				data = Files.readAllBytes(path);
//			} catch (IOException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//			
//			
//			Product product1 = product.findOne(1L);
//			
//			
//			product1.setFile(data);
//			product.save(product1);
//		} catch (URISyntaxException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		
	}
}
