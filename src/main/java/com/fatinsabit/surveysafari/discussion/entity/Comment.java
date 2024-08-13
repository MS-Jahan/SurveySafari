package com.fatinsabit.surveysafari.discussion.entity;

import com.fatinsabit.surveysafari.user.entity.User;
import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "discussion_id")
    private Discussion discussion;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String content;
    private Timestamp createdAt;
    private int upvotes;

    // Getters and setters
}
