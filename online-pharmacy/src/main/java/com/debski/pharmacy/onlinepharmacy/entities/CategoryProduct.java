package com.debski.pharmacy.onlinepharmacy.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.debski.pharmacy.onlinepharmacy.configuration.Views;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="categoryProduct")
public class CategoryProduct {
	
	@Id
	@GeneratedValue
	@JsonView(Views.CategoryProductMenu.class)
	public Long id;
	
	@JsonView(Views.CategoryProductMenu.class)
	@Column(name="name")
	public String name;
	
	@JsonView(Views.CategoryProductMenu.class)
	@Column(name="categoryNumber")
	public String number;
	
	@JsonView(Views.CategoryProductMenu.class)
	@Column(name="description",length=1000)
	public String description;
	
	@JsonView(Views.CategoryProductMenu.class)
	@Column(name="description_en",length=1000)
	public String description_en;
	
	@JsonView(Views.CategoryProductMenu.class)
	@Column(name="url")
	public String url;
	
	@JsonView(Views.CategoryProductMenu.class)
	@Column(name="order_url")
	public String order;
	
	@Column(name="insertedDate")
	public Date insertedDate;
	
	public CategoryProduct(){
		
	}
	
	/*
	 Relations
	 */
	
	@JsonView(Views.CategoryProductMenu.class)
	@ManyToOne
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
    private CategoryProduct parent;
	
	@JsonView(Views.CategoryProductMenu.class)
    @OneToMany(mappedBy="parent")
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
    private List<CategoryProduct> subcategory;
	
	
	
	@JsonView(Views.CategoryProduct.class)
	@OneToMany(cascade=CascadeType.ALL,mappedBy = "categoryProduct",fetch=FetchType.LAZY,orphanRemoval=true)
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
	private List<Product> products;
	
	
	/*
	 Relations
	 */
	

	public Long getId() {
		return id;
	}


	

	public String getDescription() {
		return description;
	}




	public void setDescription(String description) {
		this.description = description;
	}




	public String getUrl() {
		return url;
	}




	public void setUrl(String url) {
		this.url = url;
	}




	public String getOrder() {
		return order;
	}




	public void setOrder(String order) {
		this.order = order;
	}




	public Date getInsertedDate() {
		return insertedDate;
	}




	public void setInsertedDate(Date insertedDate) {
		this.insertedDate = insertedDate;
	}




	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}



	public List<Product> getProducts() {
		return products;
	}



	public void setProducts(List<Product> products) {
		this.products = products;
	}



	public String getNumber() {
		return number;
	}



	public void setNumber(String number) {
		this.number = number;
	}



	public CategoryProduct getParent() {
		return parent;
	}



	public void setParent(CategoryProduct parent) {
		this.parent = parent;
	}



	public List<CategoryProduct> getSubcategory() {
		return subcategory;
	}



	public void setSubcategory(List<CategoryProduct> subcategory) {
		this.subcategory = subcategory;
	}




	public String getDescription_en() {
		return description_en;
	}




	public void setDescription_en(String description_en) {
		this.description_en = description_en;
	}
	
	
	
	
	
	
}
