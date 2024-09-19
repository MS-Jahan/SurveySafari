package com.xpinnovators.backend.survey.entity;

import com.xpinnovators.backend.user.entity.Author;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "surveys")
public class Survey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    // title should not be empty
    @NotBlank
    @Column(length = 500)
    private String title;
    @Column(length = 10000)
    private String description;

    @ManyToOne
    @JoinColumn(name = "author_id")
    @NotEmpty
    private Author author;

    private Timestamp createdAt;
//    @Enumerated(EnumType.STRING)
    @Column(length = 10)
    private String status;
    @Column(length = 120)
    private String shareLink;
    @Column(length = 120)
    private String googleSheetLink;
    @Column(columnDefinition = "TEXT", length = 65530)
    private String content;
    @Transient // This annotation ensures that the field is not persisted in the database.
    private long responseCount;
    @Column(name = "tags") // Add this column if not already present
    private String tags;

    @PrePersist
    protected void onCreate() {
        createdAt = new Timestamp(System.currentTimeMillis());
    }

}
