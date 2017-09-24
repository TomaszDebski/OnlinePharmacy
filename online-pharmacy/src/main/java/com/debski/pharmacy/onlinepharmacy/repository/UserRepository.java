package com.debski.pharmacy.onlinepharmacy.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.debski.pharmacy.onlinepharmacy.entities.User;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {
	
	User findTop1ByUsername(String name);
	
	User findTop1ByUsernameAndPassword(String username, String password);

}
