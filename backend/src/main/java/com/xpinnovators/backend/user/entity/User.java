package com.xpinnovators.backend.user.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*; // Import all Lombok annotations

import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "users")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
// @DiscriminatorColumn(name = "user_type", discriminatorType = DiscriminatorType.STRING)
@Getter // Add Lombok's @Getter annotation
@Setter // Add Lombok's @Setter annotation
@ToString // Add Lombok's @ToString annotation
@NoArgsConstructor // Add Lombok's @NoArgsConstructor annotation
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_type", nullable = false, updatable = false)
    private String userType;

    @Column(name = "entity_id", nullable = false)
    private Long entityId;

    @Column(name = "firebase_id", nullable = false, unique = true)
    private String firebaseId;

    @Column(name = "name", nullable = false)
    @NotEmpty(message = "Name is required")
    private String name;

    @Column(name = "email", nullable = false)
    @NotEmpty(message = "Email is required")
    private String email;

    @Column(name = "username", nullable = false)
    @NotEmpty(message = "Username is required")
    private String username;

//    @Column(name = "password", nullable = false)
//    @NotEmpty(message = "Password is required")
//    private String password;

    @JsonManagedReference
    @OneToOne(cascade = CascadeType.REMOVE, orphanRemoval = true)
    @JoinColumn(name = "explorer_id", referencedColumnName = "id")
    private Explorer explorer;

    @JsonManagedReference
    @OneToOne(cascade = CascadeType.REMOVE, orphanRemoval = true)
    @JoinColumn(name = "author_id", referencedColumnName = "id")
    private Author author;

    @JsonManagedReference
    @OneToOne(cascade = CascadeType.REMOVE, orphanRemoval = true)
    @JoinColumn(name = "admin_id", referencedColumnName = "id")
    private Admin admin;
}