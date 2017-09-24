package com.debski.pharmacy.onlinepharmacy.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.debski.pharmacy.onlinepharmacy.configuration.Views;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="cart")
public class Cart {

	@Id
	@GeneratedValue
	@JsonView(Views.UserCart.class)
	public Long id;
	
	@Column(name="insertedDate")
	public Date insertedDate;
	
	// Adres do przesyłki
	
	@JsonView(Views.UserCart.class)
	@Column(name="username")
	public String firstName;
	
	@JsonView(Views.UserCart.class)
	@Column(name="lastName")
	public String lastName;
	
	@JsonView(Views.UserCart.class)
	@Column(name="street")
	public String street;
	
	@JsonView(Views.UserCart.class)
	@Column(name="city")
	public String city;
	
	@JsonView(Views.UserCart.class)
	@Column(name="postCode")
	public String postCode;
	
	@JsonView(Views.UserCart.class)
	@Column(name="phone")
	public int phone;
	
	/////////////////////
	//////Sposób wysyłki/////////
	
	@JsonView(Views.UserCart.class)
	@Column(name="deliveryOption")
	public String deliveryOption;
	
	//////////////////////////
	
//	@Lob
//	private byte[] file;
//
//    private String mimeType;
	
	public Cart(){
	}

	
	/* Relations */
	
	@JsonView(Views.UserCart.class)
	@JsonProperty
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "user_id")
	public User user;
	
	@JsonView(Views.UserCart.class)
	@OneToMany(cascade=CascadeType.ALL,mappedBy = "cart",fetch=FetchType.LAZY,orphanRemoval=true)
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
	private List<CartProduct> cartProducts;

	/* Relations */

	public Long getId() {
		return id;
	}

	

	public Date getInsertedDate() {
		return insertedDate;
	}

	public void setInsertedDate(Date insertedDate) {
		this.insertedDate = insertedDate;
	}

	

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	

	public List<CartProduct> getCartProducts() {
		return cartProducts;
	}

	public void setCartProducts(List<CartProduct> cartProducts) {
		this.cartProducts = cartProducts;
	}

	public void setId(Long id) {
		this.id = id;
	}



	public String getFirstName() {
		return firstName;
	}



	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}



	public String getLastName() {
		return lastName;
	}



	public void setLastName(String lastName) {
		this.lastName = lastName;
	}



	public String getStreet() {
		return street;
	}



	public void setStreet(String street) {
		this.street = street;
	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public String getPostCode() {
		return postCode;
	}



	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}



	public int getPhone() {
		return phone;
	}



	public void setPhone(int phone) {
		this.phone = phone;
	}



	public String getDeliveryOption() {
		return deliveryOption;
	}



	public void setDeliveryOption(String deliveryOption) {
		this.deliveryOption = deliveryOption;
	}
	
	
	
	
	
	
	
}
