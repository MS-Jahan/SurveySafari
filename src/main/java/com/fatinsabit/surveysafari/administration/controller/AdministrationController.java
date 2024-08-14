package com.fatinsabit.surveysafari.administration.controller;

import com.fatinsabit.surveysafari.administration.service.AdministrationService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/admin")
public class AdministrationController {
    private final AdministrationService administrationService;

    public AdministrationController(AdministrationService administrationService) {
        this.administrationService = administrationService;
    }
}
