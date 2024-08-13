package com.fatinsabit.surveysafari.discussion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.discussion.entity.Discussion;

public interface DiscussionRepository extends JpaRepository<Discussion, String> {}
