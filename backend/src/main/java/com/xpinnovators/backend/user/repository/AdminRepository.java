package com.xpinnovators.backend.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xpinnovators.backend.user.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, String> {}
