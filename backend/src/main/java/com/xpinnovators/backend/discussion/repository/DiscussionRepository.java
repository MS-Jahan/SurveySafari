package com.xpinnovators.backend.discussion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xpinnovators.backend.discussion.entity.Discussion;

public interface DiscussionRepository extends JpaRepository<Discussion, String> {}
