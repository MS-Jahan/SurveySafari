package com.xpinnovators.backend.subscription.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xpinnovators.backend.subscription.entity.Subscription;

public interface SubscriptionRepository extends JpaRepository<Subscription, String> {}
