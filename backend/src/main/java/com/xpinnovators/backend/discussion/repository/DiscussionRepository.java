package com.xpinnovators.backend.discussion.repository;

import com.xpinnovators.backend.discussion.entity.Discussion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiscussionRepository extends JpaRepository<Discussion, Long> { }