package com.fatinsabit.surveysafari.entity;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "surveys")
public class Survey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private Author author;

    private Timestamp createdAt;
    private String status;
    private String shareLink;
    private String googleSheetLink;
    private String content;

    // Getters and setters
}
