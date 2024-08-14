package com.xpinnovators.backend.survey.service;

import com.xpinnovators.backend.survey.repository.AttendanceRepository;
import com.xpinnovators.backend.survey.repository.ResponseRepository;
import com.xpinnovators.backend.survey.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SurveyService {

    @Autowired
    private SurveyRepository surveyRepository;
    @Autowired
    private AttendanceRepository attendanceRepository;
    @Autowired
    private ResponseRepository responseRepository;
}
