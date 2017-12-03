package com.debski.pharmacy.onlinepharmacy.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.debski.pharmacy.onlinepharmacy.entities.UserDetails;

@Repository
public interface UserDetailsRepository extends CrudRepository<UserDetails,Long>,PagingAndSortingRepository<UserDetails,Long> {
	
//	User findTop1ByUsername(String name);
//	
//	User findTop1ByUsernameAndPassword(String username, String password);
//	
//	@Query( "select user from com.debski.pharmacy.onlinepharmacy.entities.User user" )
//	Page<User> findd(Pageable page);
//	
//	@Query( "select user from com.debski.pharmacy.onlinepharmacy.entities.User user" )
//	List<User> findd();

}
