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

/**
 * @author Tomasz Dębski
 *
 */
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
	
	@Column(name="insertedDate")
	public Date insertedDate;
	
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
	
	@OneToMany(cascade=CascadeType.ALL,mappedBy = "user",fetch=FetchType.LAZY,orphanRemoval=true)
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
	private List<Cart> carts;
	@JsonView(Views.User.class)
	@OneToOne(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	private UserDetails userDetails;

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
	
}
