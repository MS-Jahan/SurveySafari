package com.fatinsabit.surveysafari.subscription.service;

import com.fatinsabit.surveysafari.subscription.repository.AuthorSubscriptionRepository;
import com.fatinsabit.surveysafari.subscription.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SubscriptionService {

    @Autowired
    private SubscriptionRepository subscriptionRepository;
    @Autowired
    private AuthorSubscriptionRepository authorSubscriptionRepository;
}
