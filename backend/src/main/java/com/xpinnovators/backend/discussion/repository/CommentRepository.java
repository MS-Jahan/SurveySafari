package com.xpinnovators.backend.discussion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xpinnovators.backend.discussion.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, String> {}
