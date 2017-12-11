package com.debski.pharmacy.onlinepharmacy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.debski.pharmacy.onlinepharmacy.configuration.Views;
import com.debski.pharmacy.onlinepharmacy.entities.Menu;
import com.debski.pharmacy.onlinepharmacy.repository.MenuRepository;
import com.fasterxml.jackson.annotation.JsonView;

/**
 * @author Tomasz Dębski
 *
 */
@RestController
@RequestMapping("/api/menu")
public class MenuController222222222 {

//	@Autowired
//	MenuRepository menuRepository;
//	
//	@Autowired
//	IPhysiotherapistService physiotherapistService;

//	@RequestMapping(method= RequestMethod.POST)
//	public void addPhysiotherapist(@RequestBody User user){
//		System.out.println(user.getFirstname());
//		BCryptPasswordEncoder encode = new BCryptPasswordEncoder();
//		user.setPassword(encode.encode(user.getPassword()));
//		userRepository.save(user);
////		physiotherapistService.addPhysiotherapist(physiotherapist);
//	}
	
//	@JsonView(Views.User.class)
//	@RequestMapping(value="/{id}")
//	public User getUserById(@PathVariable("id") long id){
////		return physiotherapistService.findOne(id);
//		return null;
//	}
	
//	@JsonView(Views.Menu.class)
//	@RequestMapping
//	public List<Menu> getAllMenu(){
//		return (List<Menu>) menuRepository.findAllWithChildren();
//	}

//	@JsonView(Views.User.class)
//	@RequestMapping("/byUsername/{name}")
//	public User getUserByUsername(@PathVariable("name") String name){
////		return physiotherapistService.getPhysiotherapistByUsername(name);
//		return null;
//	}
//	
//	@RequestMapping(value="/{id}",method=RequestMethod.PUT)
//	public void updateUser(@PathVariable("id") long id,@RequestBody User user){
////		physiotherapistService.updatePhysiotherapist(id, physiotherapist);
//	}
//	
//	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
//	public void deleteUser(@PathVariable("id") long id){
//	}
}
