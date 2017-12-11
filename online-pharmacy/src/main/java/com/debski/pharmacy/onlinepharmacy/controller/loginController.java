package com.debski.pharmacy.onlinepharmacy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.debski.pharmacy.onlinepharmacy.entities.User;
import com.debski.pharmacy.onlinepharmacy.repository.UserRepository;

/**
 * @author Tomasz Dębski
 *
 */
@RestController
@RequestMapping("/login")
public class loginController {
	
	@Autowired
	UserRepository userRepository;

	@RequestMapping(method= RequestMethod.GET)
	public User login(@RequestParam("username") String username,@RequestParam("password") String password){
		BCryptPasswordEncoder crypt = new BCryptPasswordEncoder();
		String encodePassword = crypt.encode(password);
		User user = userRepository.findTop1ByUsername(username);
		if(user != null){
			if (BCrypt.checkpw(password, user.getPassword())){
				return user;
			}else{
				return null;
			}
		}else{
			return null;
		}
	}
}
