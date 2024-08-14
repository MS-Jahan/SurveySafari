package com.xpinnovators.backend.administration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xpinnovators.backend.administration.entity.Ban;

public interface BanRepository extends JpaRepository<Ban, String> {}
