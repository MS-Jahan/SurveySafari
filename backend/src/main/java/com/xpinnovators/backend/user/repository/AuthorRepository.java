package com.xpinnovators.backend.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xpinnovators.backend.user.entity.Author;

public interface AuthorRepository extends JpaRepository<Author, String> {}
