package com.debski.pharmacy.onlinepharmacy.service;

import com.debski.pharmacy.onlinepharmacy.entities.User;
/**
 * @author Tomasz Dębski
 *
 */
public interface ILoginService {

	User login(String username,String password);
}
