package com.xpinnovators.backend.survey.repository;

import com.xpinnovators.backend.survey.entity.Response;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResponseRepository extends JpaRepository<Response, Long> {
    long countBySurveyId(Long surveyId);
    // long getSurveysByTags(String tagString);

    // You can add custom query methods here if needed
}