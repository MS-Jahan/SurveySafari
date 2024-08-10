package com.fatinsabit.surveysafari.entity;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "attendances")
public class Attendance {
    @Id
    private Long id;

    @ManyToOne
    @JoinColumn(name = "survey_id")
    private Survey survey;

    @ManyToOne
    @JoinColumn(name = "explorer_id")
    private Explorer explorer;

    private Timestamp attendedAt;

    // Getters and setters
}
