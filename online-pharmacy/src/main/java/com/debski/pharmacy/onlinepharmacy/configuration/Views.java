package com.debski.pharmacy.onlinepharmacy.configuration;

public class Views {

	public interface UserCart extends CartDetails{};
	
	public interface CartDetails{};
//	public interface Visits{}
//	
//	public interface Patient {}
	
	
	
	public interface User {}
	
	public interface CategoryProduct extends Product,CategoryProductMenu {}
	
	public interface CategoryProductMenu{}
	
	public interface Product {}
	
	public interface Menu {}
	
	public interface ParentMenu extends CategoryProductMenu {}
//	
//	public interface Interview{}
//	
//	public interface Pain {}
//	
//	public interface KindOfPain {}
//	
//	public interface BodyPlace {}
//	
//	public interface Service{}
//	
//	public interface VisitsPatient extends Visits,Patient,Service{}
//	
//	public interface Patients extends Patient,Visits{}
//	
//	public interface VisitsPhysiotherapist extends Visits,User{}
//
//	public interface VisitTreatments extends Visits{}
//	
//	public interface VisitServices{}
}
