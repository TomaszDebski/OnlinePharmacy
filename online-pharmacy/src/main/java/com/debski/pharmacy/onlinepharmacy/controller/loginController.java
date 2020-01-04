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
import com.debski.pharmacy.onlinepharmacy.service.ILoginService;

/**
 * @author Tomasz Dębski
 *
 */
@RestController
@RequestMapping("/login")
public class loginController {
	
	@Autowired
	ILoginService loginService;

	@RequestMapping(method= RequestMethod.GET)
	public User login(@RequestParam("username") String username,@RequestParam("password") String password){
		return loginService.login(username, password);
	}
}
