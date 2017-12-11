package com.debski.pharmacy.onlinepharmacy.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.debski.pharmacy.onlinepharmacy.configuration.Views;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name="product_package")
public class ProductPackage {

	@Id
	@GeneratedValue
	@JsonView(Views.Product.class)
	public Long id;
	
	@JsonView(Views.Product.class)
	@Column(name="name")
	public String name;
	
	@JsonView(Views.Product.class)
	@Column(name="price")
	public double price;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
