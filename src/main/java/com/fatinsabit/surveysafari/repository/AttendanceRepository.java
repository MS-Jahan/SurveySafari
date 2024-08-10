package com.fatinsabit.surveysafari.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.entity.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance, String> {}
