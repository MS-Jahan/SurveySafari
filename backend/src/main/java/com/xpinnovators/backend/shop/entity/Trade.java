package com.xpinnovators.backend.shop.entity;

import com.xpinnovators.backend.user.entity.Explorer;
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
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public RedeemItem getItem() {
        return item;
    }

    public void setItem(RedeemItem item) {
        this.item = item;
    }

    public Explorer getTrader() {
        return trader;
    }

    public void setTrader(Explorer trader) {
        this.trader = trader;
    }
}
