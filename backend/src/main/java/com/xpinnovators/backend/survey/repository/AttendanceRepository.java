package com.xpinnovators.backend.survey.repository;

import com.xpinnovators.backend.survey.entity.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, Long> {

    // Custom query method to find attendance by explorer and survey
    Optional<Attendance> findByExplorerIdAndSurveyId(Long explorerId, Long surveyId);
}