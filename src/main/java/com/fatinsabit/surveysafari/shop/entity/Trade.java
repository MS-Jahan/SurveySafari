package com.fatinsabit.surveysafari.shop.entity;

import com.fatinsabit.surveysafari.user.entity.Explorer;
import jakarta.persistence.*;

@Entity
@Table(name = "trade")
public class Trade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "item_id")
    private RedeemItem item;

    @ManyToOne
    @JoinColumn(name = "trader_id")
    private Explorer trader;

    // Getters and setters
}
