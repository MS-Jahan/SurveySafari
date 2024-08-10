package com.fatinsabit.surveysafari.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, String> {}
