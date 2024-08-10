package com.fatinsabit.surveysafari.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, String> {}
