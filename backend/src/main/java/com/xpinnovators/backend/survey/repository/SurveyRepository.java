package com.xpinnovators.backend.survey.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xpinnovators.backend.survey.entity.Survey;

public interface SurveyRepository extends JpaRepository<Survey, String> {}
