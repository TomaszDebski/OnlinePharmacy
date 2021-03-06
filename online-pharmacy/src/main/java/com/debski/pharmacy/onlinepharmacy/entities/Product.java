package com.debski.pharmacy.onlinepharmacy.entities;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.MapKeyColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.debski.pharmacy.onlinepharmacy.configuration.Views;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

/**
 * @author Tomasz Dębski
 *
 */
@Entity
@Table(name="product")
public class Product {

	@Id
	@GeneratedValue
	@JsonView(Views.Product.class)
	public Long id;
	
	@JsonView(Views.Product.class)
	@Column(name="name")
	public String name;
	
	@JsonView(Views.Product.class)
	@Column(name="description",length=1000)
	public String description;
	
	@JsonView(Views.Product.class)
	@Column(name="description_en",length=1000)
	public String description_en;
	
	@Column(name="insertedDate")
	public Date insertedDate;
	
	@JsonView(Views.Product.class)
	@Column(name="productNumber")
	public String number;
	
	@Lob
	@JsonView(Views.Product.class)
	@Column(name="file",length=100000)
	private byte[] file;
	
	public Product(){
	}

	/* Relations */
	
	@JsonProperty
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "categoryProduct_id")
	public CategoryProduct categoryProduct;
	
	@JsonView(Views.Product.class)
	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.LAZY,orphanRemoval=true)
	@JoinColumn(name="product_id")
	private List<ProductPackage> packages;
	
	@OneToMany(cascade=CascadeType.ALL,mappedBy = "product",fetch=FetchType.LAZY,orphanRemoval=true)
	@JsonIdentityInfo(
			  generator = ObjectIdGenerators.PropertyGenerator.class, 
			  property = "id")
	private List<CartProduct> cartProduct;

	/* Relations */
	public Long getId() {
		return id;
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

	public CategoryProduct getCategoryProduct() {
		return categoryProduct;
	}

	public void setCategoryProduct(CategoryProduct categoryProduct) {
		this.categoryProduct = categoryProduct;
	}

	public byte[] getFile() {
		return file;
	}

	public void setFile(byte[] file) {
		this.file = file;
	}


	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<ProductPackage> getPackages() {
		return packages;
	}

	public void setPackages(List<ProductPackage> packages) {
		this.packages = packages;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}