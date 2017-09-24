package com.debski.pharmacy.onlinepharmacy.controller;

import java.security.Principal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping
@RestController
public class navigationController {
	
	@RequestMapping("/findUser")
	@ResponseBody
	public Principal getUser(Principal user){
		System.out.println("Jestem w findUser: " );
		if (user == null){
			return null;
		}
		System.out.println("Jestem w findUser: " + user.getName());
		return user;
	}

}
