package com.xpinnovators.backend.shop.entity;

import com.xpinnovators.backend.user.entity.Admin;
import jakarta.persistence.*;

@Entity
@Table(name = "redeem_item")
public class RedeemItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String itemName;
    private String itemDescription;
    private int coinCost;

    @ManyToOne
    @JoinColumn(name = "controlled_by")
    private Admin controlledBy;

    private String itemData;
    private String company;
    private int quantity;
    private boolean available;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getItemDescription() {
        return itemDescription;
    }

    public void setItemDescription(String itemDescription) {
        this.itemDescription = itemDescription;
    }

    public int getCoinCost() {
        return coinCost;
    }

    public void setCoinCost(int coinCost) {
        this.coinCost = coinCost;
    }

    public Admin getControlledBy() {
        return controlledBy;
    }

    public void setControlledBy(Admin controlledBy) {
        this.controlledBy = controlledBy;
    }

    public String getItemData() {
        return itemData;
    }

    public void setItemData(String itemData) {
        this.itemData = itemData;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }
}
