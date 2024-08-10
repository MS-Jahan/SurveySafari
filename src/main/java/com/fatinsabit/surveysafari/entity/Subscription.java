package com.fatinsabit.surveysafari.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "subscriptions")
public class Subscription {
    @Id
    private Long id;
    private String planName;
    private int monthlyCoins;

    @ManyToOne
    @JoinColumn(name = "controlled_by")
    private Admin controlledBy;

    // Getters and setters
}
