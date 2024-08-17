package com.xpinnovators.backend.user.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "explorers")
public class Explorer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String explorerRank;
    private String title;
    private int point;
    private int coin;
    private String institute;
    private String socialLinks;

    @OneToOne(mappedBy = "explorer")
    private User user;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getExplorerRank() {
        return explorerRank;
    }

    public void setExplorerRank(String explorerRank) {
        this.explorerRank = explorerRank;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getPoint() {
        return point;
    }

    public void setPoint(int point) {
        this.point = point;
    }

    public int getCoin() {
        return coin;
    }

    public void setCoin(int coin) {
        this.coin = coin;
    }

    public String getInstitute() {
        return institute;
    }

    public void setInstitute(String institute) {
        this.institute = institute;
    }

    public String getSocialLinks() {
        return socialLinks;
    }

    public void setSocialLinks(String socialLinks) {
        this.socialLinks = socialLinks;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

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
