package com.fatinsabit.surveysafari.entity;

import jakarta.persistence.*;

@Entity
// @DiscriminatorValue("admin")
@Table(name = "admin")
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
