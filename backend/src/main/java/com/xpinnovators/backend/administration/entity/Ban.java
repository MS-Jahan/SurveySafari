package com.xpinnovators.backend.administration.entity;

import com.xpinnovators.backend.user.entity.User;
import com.xpinnovators.backend.user.entity.Admin;
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
    private String reason;

    // Getters and setters
}
