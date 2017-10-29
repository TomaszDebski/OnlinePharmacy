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
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.debski.pharmacy.onlinepharmacy.configuration.Views;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="user")
public class User {

	@Id
	@GeneratedValue
	@JsonView(Views.User.class)
	public Long id;
	
	@JsonView(Views.User.class)
	@Column(name="username")
	public String username;
	
	@Column(name="password")
	public String password;
	
	@JsonView(Views.User.class)
	@Column(name="role")
	private String role;
	
	@JsonView(Views.User.class)
	@Column(name="firstName")
	public String firstname;
	
	@JsonView(Views.User.class)
	@Column(name="lastName")
	public String lastname;
	
//	@JsonView(Views.User.class)
//	@Column(name="phone")
//	public String phone;
//	
//	@JsonView(Views.User.class)
//	@Column(name="pesel")
//	public String pesel;
//	
//	@JsonView(Views.User.class)
//	@Column(name="secondPhone")
//	public String secondPhone;
//	
//	@JsonView(Views.User.class)
//	@Column(name="email")
//	public String email;
//	
//	@JsonView(Views.User.class)
//	@Column(name="city")
//	public String city;
//	
//	@JsonView(Views.User.class)
//	@Column(name="postCode")
//	public String postCode;
//	
//	@JsonView(Views.User.class)
//	@Column(name="address")
//	public String address;
//	
//	@JsonView(Views.User.class)
//	@Column(name="number")
//	public String number;
	
	@Column(name="insertedDate")
	public Date insertedDate;
	
//	@Lob
//	private byte[] file;
//
//    private String mimeType;
	
	public User(){
	}

	
	
	public User(String username, String password, String role, String firstname, String lastname, Date insertedDate,
		List<Cart> carts, UserDetails userDetails) {
	super();
	this.username = username;
	this.password = password;
	this.role = role;
	this.firstname = firstname;
	this.lastname = lastname;
	this.insertedDate = insertedDate;
	this.carts = carts;
	this.userDetails = userDetails;
}



	/* Relations */
	
	@JsonView(Views.UserCart.class)
	@OneToMany(cascade=CascadeType.ALL,mappedBy = "user",fetch=FetchType.LAZY,orphanRemoval=true)
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
	private List<Cart> carts;
//	
	@OneToOne(fetch=FetchType.LAZY)
//	@JoinColumn(name="details_id")
	private UserDetails userDetails;

//	@OneToOne @MapsId
//	private UserDetails userDetails;
	/* Relations */

	public Long getId() {
		return id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

//	public String getPhone() {
//		return phone;
//	}
//
//	public void setPhone(String phone) {
//		this.phone = phone;
//	}
//
//	public String getSecondPhone() {
//		return secondPhone;
//	}
//
//	public void setSecondPhone(String secondPhone) {
//		this.secondPhone = secondPhone;
//	}
//
//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//	public String getCity() {
//		return city;
//	}
//
//	public void setCity(String city) {
//		this.city = city;
//	}
//
//	public String getPostCode() {
//		return postCode;
//	}
//
//	public void setPostCode(String postCode) {
//		this.postCode = postCode;
//	}
//
//	public String getAddress() {
//		return address;
//	}
//
//	public void setAddress(String address) {
//		this.address = address;
//	}

	public Date getInsertedDate() {
		return insertedDate;
	}

	public void setInsertedDate(Date insertedDate) {
		this.insertedDate = insertedDate;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

//	public String getPesel() {
//		return pesel;
//	}
//
//	public void setPesel(String pesel) {
//		this.pesel = pesel;
//	}
//
//	public String getNumber() {
//		return number;
//	}
//
//	public void setNumber(String number) {
//		this.number = number;
//	}

	public List<Cart> getCarts() {
		return carts;
	}

	public void setCarts(List<Cart> carts) {
		this.carts = carts;
	}

	public UserDetails getUserDetails() {
		return userDetails;
	}

	public void setUserDetails(UserDetails userDetails) {
		this.userDetails = userDetails;
	}
	
	
	
	

//	public byte[] getFile() {
//		return file;
//	}
//
//	public void setFile(byte[] file) {
//		this.file = file;
//	}

//	public String getMimeType() {
//		return mimeType;
//	}
//
//	public void setMimeType(String mimeType) {
//		this.mimeType = mimeType;
//	}
}
