package com.fatinsabit.surveysafari.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.entity.Discussion;

public interface DiscussionRepository extends JpaRepository<Discussion, String> {}
