package com.fatinsabit.surveysafari.entity;

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
}
