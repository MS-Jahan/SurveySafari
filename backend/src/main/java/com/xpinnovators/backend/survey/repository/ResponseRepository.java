package com.xpinnovators.backend.survey.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xpinnovators.backend.survey.entity.Response;

public interface ResponseRepository extends JpaRepository<Response, String> {}
