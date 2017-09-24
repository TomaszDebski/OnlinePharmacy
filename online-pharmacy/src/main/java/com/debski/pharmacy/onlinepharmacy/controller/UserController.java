package com.debski.pharmacy.onlinepharmacy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.debski.pharmacy.onlinepharmacy.configuration.Views;
import com.debski.pharmacy.onlinepharmacy.entities.User;
import com.debski.pharmacy.onlinepharmacy.repository.UserRepository;
import com.fasterxml.jackson.annotation.JsonView;

@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	UserRepository userRepository;
//	
//	@Autowired
//	IPhysiotherapistService physiotherapistService;

	@RequestMapping(method= RequestMethod.POST)
	public void addPhysiotherapist(@RequestBody User user){
		System.out.println(user.getFirstname());
		BCryptPasswordEncoder encode = new BCryptPasswordEncoder();
		user.setPassword(encode.encode(user.getPassword()));
		userRepository.save(user);
//		physiotherapistService.addPhysiotherapist(physiotherapist);
	}
	
	@JsonView(Views.User.class)
	@RequestMapping(value="/{id}")
	public User getUserById(@PathVariable("id") long id){
//		return physiotherapistService.findOne(id);
		return null;
	}
	
//	@JsonView(Views.VisitsPhysiotherapist.class)
	@RequestMapping
	public List<User> getAllPhysiotherapists(){
//		return physiotherapistService.getAllPhysiotherapists();
		return null;
	}

	@JsonView(Views.User.class)
	@RequestMapping("/byUsername/{name}")
	public User getUserByUsername(@PathVariable("name") String name){
		return userRepository.findTop1ByUsername(name);
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.PUT)
	public void updateUser(@PathVariable("id") long id,@RequestBody User user){
//		physiotherapistService.updatePhysiotherapist(id, physiotherapist);
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
	public void deleteUser(@PathVariable("id") long id){
	}
}
