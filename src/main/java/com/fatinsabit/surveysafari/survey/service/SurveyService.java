package com.fatinsabit.surveysafari.survey.service;

import com.fatinsabit.surveysafari.survey.repository.AttendanceRepository;
import com.fatinsabit.surveysafari.survey.repository.ResponseRepository;
import com.fatinsabit.surveysafari.survey.repository.SurveyRepository;
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
