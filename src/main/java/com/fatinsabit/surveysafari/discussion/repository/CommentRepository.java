package com.fatinsabit.surveysafari.discussion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.discussion.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, String> {}
