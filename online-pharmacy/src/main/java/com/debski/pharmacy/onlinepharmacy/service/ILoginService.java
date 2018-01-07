package com.debski.pharmacy.onlinepharmacy.service;

import com.debski.pharmacy.onlinepharmacy.entities.User;

public interface ILoginService {

	User login(String username,String password);
}
