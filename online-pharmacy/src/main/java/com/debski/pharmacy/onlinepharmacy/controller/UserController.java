package com.debski.pharmacy.onlinepharmacy.controller;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.debski.pharmacy.onlinepharmacy.configuration.Views;
import com.debski.pharmacy.onlinepharmacy.entities.User;
import com.debski.pharmacy.onlinepharmacy.entities.UserDetails;
import com.debski.pharmacy.onlinepharmacy.repository.UserDetailsRepository;
import com.debski.pharmacy.onlinepharmacy.repository.UserRepository;
import com.fasterxml.jackson.annotation.JsonView;

/**
 * @author Tomasz Dębski
 *
 */

@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	UserRepository userRepository;
//	
	@Autowired
	UserDetailsRepository userDetailsRepository;

	@RequestMapping(method= RequestMethod.POST)
	public void addPhysiotherapist(@RequestBody User user){
		System.out.println(user.getFirstname());
		BCryptPasswordEncoder encode = new BCryptPasswordEncoder();
		UserDetails userDetails = null;
		if (user.getUserDetails() == null){
			userDetails = new UserDetails();
			user.setUserDetails(userDetails);
			userDetails.setUser(user);
		}
		user.getUserDetails().setInsertedDate(new Date());
		user.setPassword(encode.encode(user.getPassword()));
		user.setRole("ROLE_USER");
		userRepository.save(user);
		userDetailsRepository.save(user.getUserDetails());
//		physiotherapistService.addPhysiotherapist(physiotherapist);
	}
	
	@JsonView(Views.UserDetails.class)
	@RequestMapping(value="/{id}")
	@Transactional
	public User getUserById(@PathVariable("id") long id){
		User user = userRepository.findOne(id);
		Hibernate.initialize(user.getUserDetails());
		return user; 
//		return null;
	}
	
	@JsonView(Views.User.class)
	@RequestMapping
	public List<User> getAllUser(){
//		return physiotherapistService.getAllPhysiotherapists();
		return (List<User>)userRepository.findAll();
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
		userRepository.delete(id);
	}
	
	@RequestMapping("/pagination")
	public Page<User> getUserWithPagination(Pageable pageable){
		Page<User> users = userRepository.findd(pageable);
		return users ; 
	}
}
