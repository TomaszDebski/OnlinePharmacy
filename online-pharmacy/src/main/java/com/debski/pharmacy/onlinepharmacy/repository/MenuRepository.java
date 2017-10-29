package com.debski.pharmacy.onlinepharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.debski.pharmacy.onlinepharmacy.entities.Menu;

public interface MenuRepository{
//public interface MenuRepository extends CrudRepository<Menu,Long> {
//
////	@Query( "from Product p where p.number like %:categoryNumber%" )
//	List<Menu> findAllByOrderByOrder();
//	
//	@Query( "select distinct m from Menu m left join m.submenu where m.parent is null" )
//	List<Menu> findAllWithChildren();
}
