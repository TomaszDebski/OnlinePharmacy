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
	@JsonView(Views.CartDetails.class)
	public Long id;
	
	@JsonView(Views.CartDetails.class)
	@Column(name="name")
	public String name;
	
	@JsonView(Views.CartDetails.class)
	@Column(name="price",columnDefinition="Decimal(10,2) default '100.00'")
	public Double price;
	
	@JsonView(Views.CartDetails.class)
	@Column(name="unit_price",columnDefinition="Decimal(10,2) default '100.00'")
	public Double unitPrice;
	
	@Column(name="insertedDate")
	public Date insertedDate;
	
	@JsonView(Views.CartDetails.class)
	@Column(name="productNumber")
	public String number;
	
	@JsonView(Views.CartDetails.class)
	@Column(name="total_number")
	public int totalNumber;
	
//	@Lob
//	@JsonView(Views.CartDetails.class)
//	@Column(name="file",length=100000)
//	private byte[] file;
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
	@JsonView(Views.CartDetails.class)
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

	public int getTotalNumber() {
		return totalNumber;
	}

	public void setTotalNumber(int totalNumber) {
		this.totalNumber = totalNumber;
	}

	public Double getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(Double unitPrice) {
		this.unitPrice = unitPrice;
	}
	
	
	
	
	
}