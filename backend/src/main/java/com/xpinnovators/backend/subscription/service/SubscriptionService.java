package com.xpinnovators.backend.subscription.service;

import com.xpinnovators.backend.subscription.repository.AuthorSubscriptionRepository;
import com.xpinnovators.backend.subscription.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SubscriptionService {

    @Autowired
    private SubscriptionRepository subscriptionRepository;
    @Autowired
    private AuthorSubscriptionRepository authorSubscriptionRepository;
}
