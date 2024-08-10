package com.fatinsabit.surveysafari.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.entity.Survey;

public interface SurveyRepository extends JpaRepository<Survey, String> {}
