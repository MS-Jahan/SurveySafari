package com.xpinnovators.backend.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xpinnovators.backend.user.entity.Explorer;

public interface ExplorerRepository extends JpaRepository<Explorer, String> {}
