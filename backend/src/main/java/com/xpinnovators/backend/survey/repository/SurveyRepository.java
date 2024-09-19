package com.xpinnovators.backend.survey.repository;

import com.xpinnovators.backend.survey.dto.SurveyDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import com.xpinnovators.backend.survey.entity.Survey;

import java.util.Optional;

public interface SurveyRepository extends JpaRepository<Survey, Long> {
    Page<Survey> findByAuthorId(Long authorId, Pageable pageable);
    Page<Survey> findByStatus(String status, Pageable pageable);
    Page<Survey> findByAuthorIdAndStatus(Long authorId, String status, Pageable pageable);
    Page<Survey> findByStatusAndAuthorUserUsername(String status, String username, Pageable pageable);
}