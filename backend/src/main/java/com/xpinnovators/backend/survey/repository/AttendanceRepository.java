package com.xpinnovators.backend.survey.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xpinnovators.backend.survey.entity.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance, String> {}
