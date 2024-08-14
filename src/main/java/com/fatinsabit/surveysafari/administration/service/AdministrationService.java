package com.fatinsabit.surveysafari.administration.service;

import com.fatinsabit.surveysafari.administration.repository.BanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AdministrationService {

    @Autowired
    private BanRepository banRepository;
}
