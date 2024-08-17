package com.xpinnovators.backend.user.repository;

import com.xpinnovators.backend.user.entity.Explorer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExplorerRepository extends JpaRepository<Explorer, Long> {

    // Get a paginated list of Explorers sorted by points in descending order
    Page<Explorer> findAllByOrderByPointDesc(Pageable pageable);
}