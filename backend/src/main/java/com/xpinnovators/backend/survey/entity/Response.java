package com.xpinnovators.backend.survey.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "responses")
public class Response {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "survey_id")
    private Survey survey;

    @ManyToOne
    @JoinColumn(name = "attendance_id")
    private Attendance attendance;

    private String responseData;

    // Getters and setters
}
