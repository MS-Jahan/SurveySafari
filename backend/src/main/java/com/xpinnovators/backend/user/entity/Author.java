package com.xpinnovators.backend.user.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
// @DiscriminatorValue("author")
@Table(name = "author")
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String company;
    private int coin;
    private String socialLinks;

    @JsonBackReference
    @OneToOne(mappedBy = "author")
    private User user;

    // Getters and setters
    public Author() {
    }

    public Author(Long id) {
        this.id = id;
    }
}
