package com.fatinsabit.surveysafari.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "trade")
public class Trade {
    @Id
    private Long id;

    @ManyToOne
    @JoinColumn(name = "item_id")
    private RedeemItem item;

    @ManyToOne
    @JoinColumn(name = "trader_id")
    private Explorer trader;

    // Getters and setters
}
