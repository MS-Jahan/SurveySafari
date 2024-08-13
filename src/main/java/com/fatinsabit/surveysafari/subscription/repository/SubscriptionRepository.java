package com.fatinsabit.surveysafari.subscription.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.subscription.entity.Subscription;

public interface SubscriptionRepository extends JpaRepository<Subscription, String> {}
