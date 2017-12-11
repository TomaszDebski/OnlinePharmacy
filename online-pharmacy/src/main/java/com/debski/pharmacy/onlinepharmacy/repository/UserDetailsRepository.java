package com.debski.pharmacy.onlinepharmacy.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.debski.pharmacy.onlinepharmacy.entities.UserDetails;

/**
 * @author Tomasz Dębski
 *
 */
@Repository
public interface UserDetailsRepository extends CrudRepository<UserDetails,Long>,PagingAndSortingRepository<UserDetails,Long> {
	
}
