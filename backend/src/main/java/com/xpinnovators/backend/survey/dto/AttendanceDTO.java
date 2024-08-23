package com.xpinnovators.backend.survey.dto;

import com.xpinnovators.backend.survey.entity.Attendance;
import java.sql.Timestamp;

public class AttendanceDTO {
    private Long id;
    private Long surveyId;
    private Long explorerId;
    private Timestamp attendedAt;

    public AttendanceDTO(Attendance attendance) {
        this.id = attendance.getId();
        this.surveyId = attendance.getSurvey().getId();
        this.explorerId = attendance.getExplorer().getId();
        this.attendedAt = attendance.getAttendedAt();
    }

    // Getters and setters
}