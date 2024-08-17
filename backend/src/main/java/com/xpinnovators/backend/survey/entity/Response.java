package com.xpinnovators.backend.survey.entity;

import jakarta.persistence.*;

import javax.validation.constraints.NotBlank;

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

    @NotBlank
    private String responseData;

    // Constructors, getters and setters
    public String getResponseData() {
        return responseData;
    }

    public void setResponseData(String responseData) {
        this.responseData = responseData;
    }
}
