package com.xpinnovators.backend.survey.dto;

import com.xpinnovators.backend.survey.entity.Attendance;

import java.sql.Timestamp;

public class AttendanceDTO {
    private Long id;
    private Long surveyId;
    private Long explorerId;
    private Timestamp attendedAt;

    // Constructors, getters, and setters

    public AttendanceDTO() {
        // Default constructor
    }

    public AttendanceDTO(Attendance attendance) {
        this.id = attendance.getId();
        this.surveyId = attendance.getSurvey().getId();
        this.explorerId = attendance.getExplorer().getId();
        this.attendedAt = attendance.getAttendedAt();
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getSurveyId() {
        return surveyId;
    }

    public void setSurveyId(Long surveyId) {
        this.surveyId = surveyId;
    }

    public Long getExplorerId() {
        return explorerId;
    }

    public void setExplorerId(Long explorerId) {
        this.explorerId = explorerId;
    }

    public Timestamp getAttendedAt() {
        return attendedAt;
    }

    public void setAttendedAt(Timestamp attendedAt) {
        this.attendedAt = attendedAt;
    }
}