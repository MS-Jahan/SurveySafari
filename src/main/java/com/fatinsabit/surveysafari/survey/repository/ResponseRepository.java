package com.fatinsabit.surveysafari.survey.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.survey.entity.Response;

public interface ResponseRepository extends JpaRepository<Response, String> {}
