package com.debski.pharmacy.onlinepharmacy.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.debski.pharmacy.onlinepharmacy.configuration.Views;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name="cart_product")
public class CartProduct {

	@Id
	@GeneratedValue
	@JsonView(Views.Product.class)
	public Long id;
	
	@JsonView(Views.Product.class)
	@Column(name="name")
	public String name;
	
	@JsonView(Views.Product.class)
	@Column(name="price",columnDefinition="Decimal(10,2) default '100.00'")
	public Double price;
	
	@Column(name="insertedDate")
	public Date insertedDate;
	
	@JsonView(Views.Product.class)
	@Column(name="productNumber")
	public String number;
	
	@Lob
	@JsonView(Views.Product.class)
	@Column(name="file",length=100000)
	private byte[] file;
//
//    private String mimeType;
	
	public CartProduct(){
	}

//	public Product() {
//		super();
//	}
	
	/* Relations */
	
//	@JsonView(Views.VisitsPhysiotherapist.class)
//	@OneToMany(cascade=CascadeType.ALL,mappedBy = "physiotherapist",fetch=FetchType.LAZY,orphanRemoval=true)
//	@JsonIdentityInfo(
//			  generator = ObjectIdGenerators.PropertyGenerator.class, 
//			  property = "id")
//	private List<Visit> visits;
	
//	@JsonView(Views.CategoryProduct.class)
	@JsonProperty
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "product_id")
	public Product product;
	
	@JsonProperty
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "cart_id")
	public Cart cart;

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

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Date getInsertedDate() {
		return insertedDate;
	}

	public void setInsertedDate(Date insertedDate) {
		this.insertedDate = insertedDate;
	}

	public byte[] getFile() {
		return file;
	}

	public void setFile(byte[] file) {
		this.file = file;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public Cart getCart() {
		return cart;
	}

	public void setCart(Cart cart) {
		this.cart = cart;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	
	
	
	
}