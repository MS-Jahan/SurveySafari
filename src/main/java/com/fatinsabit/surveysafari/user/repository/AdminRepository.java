package com.fatinsabit.surveysafari.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.user.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, String> {}
