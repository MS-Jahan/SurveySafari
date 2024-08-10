package com.fatinsabit.surveysafari.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "responses")
public class Response {
    @Id
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
