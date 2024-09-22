package com.xpinnovators.backend.user.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
// @DiscriminatorValue("explorer")
@Table(name = "explorer")
public class Explorer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String explorerRank;
    private String title;
    private String bio;
    private int point;
    private int coin;
    private String institute;
    @OneToMany(mappedBy = "explorer", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SocialLink> socialLinks = new ArrayList<>();

    @JsonBackReference
    @OneToOne(mappedBy = "explorer")
    private User user;

    @Override
    public String toString() {
        return "Explorer{" +
                "id=" + id +
                ", explorerRank='" + explorerRank + '\'' +
                ", title='" + title + '\'' +
                ", point=" + point +
                ", coin=" + coin +
                ", institute='" + institute + '\'' +
                ", socialLinks='" + socialLinks + '\'' +
                ", user=" + user +
                '}';
    }
}
