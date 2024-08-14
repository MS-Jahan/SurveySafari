package com.xpinnovators.backend.subscription.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xpinnovators.backend.subscription.entity.AuthorSubscription;

public interface AuthorSubscriptionRepository extends JpaRepository<AuthorSubscription, String> {}
