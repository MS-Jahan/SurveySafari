package com.fatinsabit.surveysafari.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.user.entity.Author;

public interface AuthorRepository extends JpaRepository<Author, String> {}
