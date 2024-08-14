package com.xpinnovators.backend.user.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "explorers")
public class Explorer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String explorerRank;
    private String title;
    private int point;
    private int coin;
    private String institute;
    private String socialLinks;

    public Long getId() {
        return id;
    }

    // Getters and setters
}
