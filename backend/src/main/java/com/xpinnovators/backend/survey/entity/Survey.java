package com.xpinnovators.backend.survey.entity;

import com.xpinnovators.backend.user.entity.Author;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Entity
@Getter
@Setter
@Table(name = "surveys")
public class Survey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private Author author;

    private Timestamp createdAt;
    private String status;
    private String shareLink;
    private String googleSheetLink;
    private String content;
}
