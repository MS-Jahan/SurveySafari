package com.fatinsabit.surveysafari.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.entity.Author;

public interface AuthorRepository extends JpaRepository<Author, String> {}
