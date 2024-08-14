package com.xpinnovators.backend.user.entity;

import jakarta.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "users")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "user_type", discriminatorType = DiscriminatorType.STRING)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_type", nullable = false, insertable = false, updatable = false)
    private String userType;

    @Column(name = "entity_id", nullable = false, unique = true)
    private Long entityId;

    @Column(name = "name", nullable = false)
    @NotEmpty(message = "Name is required")
    private String name;

    @Column(name = "email", nullable = false)
    @NotEmpty(message = "Email is required")
    private String email;

    @Column(name = "username", nullable = false)
    @NotEmpty(message = "Username is required")
    private String username;

    @Column(name = "password", nullable = false)
    @NotEmpty(message = "Password is required")
    private String password;

    // Add fields for Explorer, Author, and Admin
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "explorer_id", referencedColumnName = "id")
    private Explorer explorer;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "author_id", referencedColumnName = "id")
    private Author author;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "admin_id", referencedColumnName = "id")
    private Admin admin;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserType() {
        return userType;
    }

    public Long getEntityId() {
        return entityId;
    }

    public void setEntityId(Long entityId) {
        this.entityId = entityId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userType='" + userType + '\'' +
                ", entityId='" + entityId + '\'' +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", username='" + username + '\'' +
                '}';
    }

    public void setExplorer(Explorer explorer) {
        this.explorer = explorer;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }
}

