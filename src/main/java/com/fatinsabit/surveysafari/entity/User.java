package com.fatinsabit.surveysafari.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.*;
import javax.validation.*;
import javax.validation.constraints.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // make usertype required
    @Column(name = "user_type", nullable = false)
    @NotEmpty(message = "Username is required")
    private String userType;

    @Column(name = "entity_id")
    private Long entityId;

    // make name required
    @Column(name = "name", nullable = false)
    @NotEmpty(message = "Name is required")
    private String name;
    // make email required
    @Column(name = "email", nullable = false)
    @NotEmpty(message = "Email is required")
    private String email;
    // make username required
    @Column(name = "username", nullable = false)
    @NotEmpty(message = "Username is required")
    private String username;
    // make password required
    @Column(name = "password", nullable = false)
    @NotEmpty(message = "Password is required")
    private String password;

    @ManyToOne
    @JoinColumn(name = "entity_id", insertable = false, updatable = false)
    private Explorer explorer;

    @ManyToOne
    @JoinColumn(name = "entity_id", insertable = false, updatable = false)
    private Author author;

    @ManyToOne
    @JoinColumn(name = "entity_id", insertable = false, updatable = false)
    private Admin admin;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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


    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
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

    public Explorer getExplorer() {
        return explorer;
    }

    public void setExplorer(Explorer explorer) {
        this.explorer = explorer;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
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
                ", explorer=" + explorer +
                ", author=" + author +
                ", admin=" + admin +
                '}';
    }

}