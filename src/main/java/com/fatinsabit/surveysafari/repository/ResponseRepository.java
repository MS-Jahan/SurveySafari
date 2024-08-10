package com.fatinsabit.surveysafari.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.entity.Response;

public interface ResponseRepository extends JpaRepository<Response, String> {}
