package com.debski.pharmacy.onlinepharmacy.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.debski.pharmacy.onlinepharmacy.configuration.Views;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

//@Entity
//@Table(name="Menu")
public class Menu {
	
	@Id
	@GeneratedValue
	@JsonView(Views.Menu.class)
	public Long id;
	
	@JsonView(Views.Menu.class)
	@Column(name="name")
	public String name;
	
	@JsonView(Views.Menu.class)
	@Column(name="description")
	public String description;
	
	@JsonView(Views.Menu.class)
	@Column(name="url")
	public String url;
	
	@JsonView(Views.Menu.class)
	@Column(name="order_url")
	public String order;
	
	@Column(name="insertedDate")
	public Date insertedDate;
	
//	@JsonView(Views.Menu.class)
	@ManyToOne
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
    private Menu parent;
	
	@JsonView(Views.Menu.class)
    @OneToMany(mappedBy="parent")
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
    private List<Menu> submenu;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


	public Date getInsertedDate() {
		return insertedDate;
	}

	public void setInsertedDate(Date insertedDate) {
		this.insertedDate = insertedDate;
	}


	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getOrder() {
		return order;
	}

	public void setOrder(String order) {
		this.order = order;
	}


	public List<Menu> getSubmenu() {
		return submenu;
	}

	public void setSubmenu(List<Menu> submenu) {
		this.submenu = submenu;
	}

	public Menu getParent() {
		return parent;
	}

	public void setParent(Menu parent) {
		this.parent = parent;
	}

	
	
	
	

}
