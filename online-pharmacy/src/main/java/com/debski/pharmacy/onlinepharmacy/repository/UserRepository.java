package com.debski.pharmacy.onlinepharmacy.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.debski.pharmacy.onlinepharmacy.entities.User;

/**
 * @author Tomasz Dębski
 *
 */
@Repository
public interface UserRepository extends CrudRepository<User,Long>,PagingAndSortingRepository<User,Long> {
	
	User findTop1ByUsername(String name);
	
	User findTop1ByUsernameAndPassword(String username, String password);
	
	@Query( "select user from com.debski.pharmacy.onlinepharmacy.entities.User user" )
	Page<User> findd(Pageable page);
	
	@Query( "select user from com.debski.pharmacy.onlinepharmacy.entities.User user" )
	List<User> findd();

}
