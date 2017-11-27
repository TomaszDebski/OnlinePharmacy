package com.debski.pharmacy.onlinepharmacy.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.debski.pharmacy.onlinepharmacy.configuration.Views;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name="user_details")
public class UserDetails {

	@Id
	@GeneratedValue
//	@JsonView(Views.User.class)
	public Long id;
	
	@JsonView(Views.User.class)
	@Column(name="phone")
	public String phone;
	
	@JsonView(Views.User.class)
	@Column(name="pesel")
	public String pesel;
	
	@JsonView(Views.User.class)
	@Column(name="secondPhone")
	public String secondPhone;
	
	@JsonView(Views.User.class)
	@Column(name="email")
	public String email;
	
	@JsonView(Views.User.class)
	@Column(name="city")
	public String city;
	
	@JsonView(Views.User.class)
	@Column(name="postCode")
	public String postCode;
	
	@JsonView(Views.User.class)
	@Column(name="address")
	public String address;
	
	@JsonView(Views.User.class)
	@Column(name="number")
	public String number;
	
	@Column(name="insertedDate")
	public Date insertedDate;
	
//	@Lob
//	private byte[] file;
//
//    private String mimeType;
	
	public UserDetails(){
	}
	
	public UserDetails(Long id, String phone, String pesel, String secondPhone, String email, String city,
			String postCode, String address, String number, Date insertedDate) {
		super();
		this.id = id;
		this.phone = phone;
		this.pesel = pesel;
		this.secondPhone = secondPhone;
		this.email = email;
		this.city = city;
		this.postCode = postCode;
		this.address = address;
		this.number = number;
		this.insertedDate = insertedDate;
	}

	/* Relations */

	
	@JsonIgnore
	@OneToOne(fetch=FetchType.LAZY, mappedBy="userDetails")
	  private User user;

	/* Relations */

	public Long getId() {
		return id;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getSecondPhone() {
		return secondPhone;
	}

	public void setSecondPhone(String secondPhone) {
		this.secondPhone = secondPhone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getInsertedDate() {
		return insertedDate;
	}

	public void setInsertedDate(Date insertedDate) {
		this.insertedDate = insertedDate;
	}

	public String getPesel() {
		return pesel;
	}

	public void setPesel(String pesel) {
		this.pesel = pesel;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	

}
