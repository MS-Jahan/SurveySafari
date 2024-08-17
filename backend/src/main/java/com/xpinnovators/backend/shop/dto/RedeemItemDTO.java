package com.xpinnovators.backend.shop.dto;

import com.xpinnovators.backend.shop.entity.RedeemItem;

public class RedeemItemDTO {
    private Long id;
    private String itemName;
    private String itemDescription;
    private int coinCost;
    // ... other relevant fields

    // Constructors, getters, setters

    public RedeemItemDTO(RedeemItem item) {
        this.id = item.getId();
        this.itemName = item.getItemName();
        this.itemDescription = item.getItemDescription();
        this.coinCost = item.getCoinCost();
        // ... set other fields
    }

    public RedeemItem toEntity() {
        RedeemItem item = new RedeemItem();
        item.setId(this.id);
        item.setItemName(this.itemName);
        item.setItemDescription(this.itemDescription);
        item.setCoinCost(this.coinCost);
        // ... set other fields
        return item;
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
}