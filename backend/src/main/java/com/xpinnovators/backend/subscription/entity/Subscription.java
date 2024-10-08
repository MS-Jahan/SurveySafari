package com.xpinnovators.backend.subscription.entity;

import com.xpinnovators.backend.user.entity.Admin;
import jakarta.persistence.*;

@Entity
@Table(name = "subscriptions")
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String planName;
    private int monthlyCoins;

    @ManyToOne
    @JoinColumn(name = "controlled_by")
    private Admin controlledBy;

    // Getters and setters
}
