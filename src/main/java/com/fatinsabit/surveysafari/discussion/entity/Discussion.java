package com.fatinsabit.surveysafari.discussion.entity;

import com.fatinsabit.surveysafari.user.entity.User;
import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "discussions")
public class Discussion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;

    @ManyToOne
    @JoinColumn(name = "created_by")
    private User createdBy;

    private Timestamp createdAt;

    // Getters and setters
}
