package com.fatinsabit.surveysafari.subscription.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.subscription.entity.AuthorSubscription;

public interface AuthorSubscriptionRepository extends JpaRepository<AuthorSubscription, String> {}
