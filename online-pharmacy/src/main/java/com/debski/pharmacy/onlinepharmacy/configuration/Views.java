package com.debski.pharmacy.onlinepharmacy.configuration;

/**
 * @author Tomasz Dębski
 *
 */
public class Views {

	public interface UserCart extends CartDetails{};
	
	public interface CartDetails{};
	
	public interface User {}
	
	public interface UserDetails extends User {}
	
	public interface CategoryProduct extends Product,CategoryProductMenu {}
	
	public interface CategoryProductMenu{}
	
	public interface Product {}
	
	public interface Menu {}
	
	public interface ParentMenu extends CategoryProductMenu {}
}
