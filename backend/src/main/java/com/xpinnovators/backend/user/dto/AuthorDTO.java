package com.xpinnovators.backend.user.dto;

import com.xpinnovators.backend.user.entity.Author;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AuthorDTO {
    // Getters and Setters
    private Long id;
    private String company;
    private int coin;
    private String socialLinks;

    // Constructors
    public AuthorDTO() {
    }

    public AuthorDTO(Author author) {
        this.id = author.getId();
        this.company = author.getCompany();
        this.coin = author.getCoin();
        this.socialLinks = author.getSocialLinks();
    }

}