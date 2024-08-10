package com.fatinsabit.surveysafari.entity;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "discussions")
public class Discussion {
    @Id
    private Long id;
    private String title;
    private String content;

    @ManyToOne
    @JoinColumn(name = "created_by")
    private User createdBy;

    private Timestamp createdAt;

    // Getters and setters
}
