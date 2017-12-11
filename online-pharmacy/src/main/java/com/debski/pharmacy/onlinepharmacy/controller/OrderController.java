package com.debski.pharmacy.onlinepharmacy.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Tomasz Dębski
 *
 */
@RestController
@RequestMapping("/api/order")
public class OrderController {

//	@Autowired
//	CartRepository cartRepository;
	
//	@Autowired
//	ProductRepository productRepository;
	
//	@Autowired
//	CartProductRepository cartProductRepository;
	 
//	@Autowired
//	CategoryProductRepository categoryRepository;
	
//	OrderDTO orderDTO = new OrderDTO();
//	
//	@RequestMapping(method = RequestMethod.POST)
//	public void ToDTO(@RequestBody OrderDTO order){
//		if (order != null){
//			orderDTO.setFirstName(order.getFirstName());
//			orderDTO.setLastName(order.getLastName());
//			orderDTO.setAddress(order.getAddress());
//		}else{
//			System.out.println("Order jest nullem (ToDTO)");
//		}
//	}
	
	
//	@RequestMapping(method= RequestMethod.POST)
//	public void addCart(@RequestBody Cart cart){
//		System.out.println("cart.getProducts " + cart);
//		CategoryProduct cat = categoryRepository.findOne(1L);
//		for(CartProduct product : cart.getCartProducts()){
//			product.setId(null);
//		}
//		cartRepository.save(cart);
//		for(CartProduct product : cart.getCartProducts()){
//			product.setCart(cart);
////			product.setCategoryProduct(cat);
//			cartProductRepository.save(product);
//		}
//		physiotherapistService.addPhysiotherapist(physiotherapist);
//	}
	
//	@JsonView(Views.User.class)
//	@RequestMapping(value="/{id}")
//	public User getCartById(@PathVariable("id") long id){
////		return physiotherapistService.findOne(id);
//		return null;
//	}
	
//	@JsonView(Views.VisitsPhysiotherapist.class)
//	@RequestMapping
//	public List<User> getAllPhysiotherapists(){
////		return physiotherapistService.getAllPhysiotherapists();
//		return null;
//	}

//	@JsonView(Views.User.class)
//	@RequestMapping("/byUsername/{name}")
//	public User getUserByUsername(@PathVariable("name") String name){
////		return physiotherapistService.getPhysiotherapistByUsername(name);
//		return null;
//	}
	
//	@RequestMapping(value="/{id}",method=RequestMethod.PUT)
//	public void updateUser(@PathVariable("id") long id,@RequestBody User user){
////		physiotherapistService.updatePhysiotherapist(id, physiotherapist);
//	}
//	
//	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
//	public void deleteUser(@PathVariable("id") long id){
//	}
}
