package com.fatinsabit.surveysafari.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.entity.Subscription;

public interface SubscriptionRepository extends JpaRepository<Subscription, String> {}
