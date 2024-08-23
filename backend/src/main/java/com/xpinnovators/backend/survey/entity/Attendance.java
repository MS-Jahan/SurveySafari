package com.xpinnovators.backend.survey.entity;

import com.xpinnovators.backend.user.entity.Explorer;
import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "attendances")
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "survey_id")
    private Survey survey;

    @ManyToOne
    @JoinColumn(name = "explorer_id")
    private Explorer explorer;

    private Timestamp attendedAt;

    // Constructors, getters, and setters

    public Long getId() {
        return id;
    }

    public Survey getSurvey() {
        return survey;
    }

    public Explorer getExplorer() {
        return explorer;
    }

    public Timestamp getAttendedAt() {
        return attendedAt;
    }

    public void setExplorer(Explorer explorer) {
        this.explorer = explorer;
    }

    public void setSurvey(Survey survey) {
        this.survey = survey;
    }

    public void setAttendedAt(Timestamp timestamp) {
        this.attendedAt = timestamp;
    }
}