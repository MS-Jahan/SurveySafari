package com.xpinnovators.backend.administration.service;

import com.xpinnovators.backend.administration.repository.BanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AdministrationService {

    @Autowired
    private BanRepository banRepository;
}
