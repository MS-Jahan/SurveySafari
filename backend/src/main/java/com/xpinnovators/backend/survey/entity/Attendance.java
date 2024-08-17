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

    public AttendanceDTO(Attendance attendance) {
        this.id = attendance.getId();
        this.surveyId = attendance.getSurvey().getId();
        this.explorerId = attendance.getExplorer().getId();
        this.attendedAt = attendance.getAttendedAt();
    }
}
