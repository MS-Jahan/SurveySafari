package com.xpinnovators.backend.survey.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Entity
@Setter
@Getter
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

    // Constructors, getters and setters
    @NotBlank
    private String responseData;
}
