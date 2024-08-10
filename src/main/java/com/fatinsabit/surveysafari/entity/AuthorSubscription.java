package com.fatinsabit.surveysafari.entity;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "author_subscriptions")
public class AuthorSubscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private Author author;

    @ManyToOne
    @JoinColumn(name = "subscription_id")
    private Subscription subscription;

    private Timestamp expiryDate;

    // Getters and setters
}
