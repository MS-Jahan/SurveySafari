package com.fatinsabit.surveysafari.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "explorers")
public class Explorer {
    @Id
    private Long id;
    private String name;
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
