package com.debski.pharmacy.onlinepharmacy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.debski.pharmacy.onlinepharmacy.entities.User;
import com.debski.pharmacy.onlinepharmacy.repository.UserRepository;
import org.springframework.stereotype.Service;
/**
 * @author Tomasz Dębski
 *
 */
@Service
public class LoginService implements ILoginService{
	
	@Autowired
	UserRepository userRepository;

	@Override
	public User login(String username, String password) {
		BCryptPasswordEncoder crypt = new BCryptPasswordEncoder();
		String encodePassword = crypt.encode(password);
		User user = userRepository.findTop1ByUsername(username);
		if(user != null){
			if (BCrypt.checkpw(password, user.getPassword())){
				return user;
			}else{
				return null;
			}
		}
		return user;
	}

}
