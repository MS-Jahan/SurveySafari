package com.fatinsabit.surveysafari.administration.entity;

import com.fatinsabit.surveysafari.user.entity.User;
import com.fatinsabit.surveysafari.user.entity.Admin;
import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "bans")
public class Ban {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "banned_by")
    private Admin bannedBy;

    private Timestamp bannedAt;

    // Getters and setters
}
