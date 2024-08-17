package com.xpinnovators.backend.user.dto;

import com.xpinnovators.backend.user.entity.Explorer;

public class ExplorerDTO {
    private Long id;
    private String name;
    private int point;
    // ... other fields you want to display on the leaderboard

    // Constructors, getters, and setters

    public ExplorerDTO(Explorer explorer) {
        this.id = explorer.getId();
        this.name = explorer.getUser().getName();  // Access name from the associated User entity
        this.point = explorer.getPoint();
        // ... initialize other fields
    }
}