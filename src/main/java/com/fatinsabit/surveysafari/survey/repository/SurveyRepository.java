package com.fatinsabit.surveysafari.survey.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.survey.entity.Survey;

public interface SurveyRepository extends JpaRepository<Survey, String> {}
