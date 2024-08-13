package com.fatinsabit.surveysafari.administration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.administration.entity.Ban;

public interface BanRepository extends JpaRepository<Ban, String> {}
