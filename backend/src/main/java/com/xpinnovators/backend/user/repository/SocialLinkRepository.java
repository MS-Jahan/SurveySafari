package com.xpinnovators.backend.user.repository;

import com.xpinnovators.backend.user.entity.SocialLink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SocialLinkRepository extends JpaRepository<SocialLink, Long> {
    List<SocialLink> findByExplorerId(Long explorerId);

    void deleteByExplorerId(Long explorerId);
}