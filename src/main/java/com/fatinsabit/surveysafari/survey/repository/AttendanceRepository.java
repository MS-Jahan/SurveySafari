package com.fatinsabit.surveysafari.survey.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.survey.entity.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance, String> {}
