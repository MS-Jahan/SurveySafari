package com.xpinnovators.backend.user.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "social_links")
public class SocialLink {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "explorer_id")
    private Explorer explorer;

    private String platform; // e.g., "facebook", "github"
    private String link;

    // ... constructors, getters, and setters
}