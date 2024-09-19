package com.xpinnovators.backend.survey.controller;

import com.xpinnovators.backend.exception.ResourceNotFoundException;
import com.xpinnovators.backend.survey.dto.SurveyDTO;
import com.xpinnovators.backend.survey.entity.Survey;
import com.xpinnovators.backend.survey.service.SurveyService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import com.xpinnovators.backend.survey.dto.AttendanceDTO;
import com.xpinnovators.backend.survey.dto.ResponseDTO;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/surveys")
public class SurveyController {

    private final SurveyService surveyService;

    public SurveyController(SurveyService surveyService) {
        this.surveyService = surveyService;
    }

    // Create a new survey (Author only)
    @PostMapping("/create")
    @PreAuthorize("hasRole('AUTHOR')")
    public ResponseEntity<SurveyDTO> createSurvey(@Valid @RequestBody SurveyDTO surveyDTO, Authentication authentication) {
        SurveyDTO createdSurvey = surveyService.createSurvey(surveyDTO, authentication);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSurvey);
    }

    // Get all surveys (with pagination)
    @GetMapping("/all")
    public ResponseEntity<Page<SurveyDTO>> getAllSurveys(Pageable pageable) {
        Page<SurveyDTO> surveys = surveyService.getAllSurveys(pageable);
        return ResponseEntity.ok(surveys);
    }

    // Get surveys by author id
    @GetMapping("/author/{authorId}")
    public ResponseEntity<Page<SurveyDTO>> getSurveysByAuthor(@PathVariable Long authorId, Pageable pageable, Authentication authentication) {
        Page<SurveyDTO> surveys = surveyService.getSurveysByAuthor(authorId, pageable, authentication);
        return ResponseEntity.ok(surveys);
    }

    // Get surveys by author
    @GetMapping("/author")
    public ResponseEntity<Page<SurveyDTO>> getSurveysByCurrentAuthor(Pageable pageable, Authentication authentication) {
        Page<SurveyDTO> surveys = surveyService.getSurveysForAuthor(pageable, authentication);
        return ResponseEntity.ok(surveys);
    }

    // Get survey by ID
    @GetMapping("/{id}")
    public ResponseEntity<SurveyDTO> getSurveyById(@PathVariable Long id) {
        SurveyDTO survey = surveyService.getSurveyById(id);
        return ResponseEntity.ok(survey);
    }

    // Update survey (Author only, check ownership)
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('AUTHOR')")
    public ResponseEntity<SurveyDTO> updateSurvey(@PathVariable Long id, @Valid @RequestBody SurveyDTO surveyDTO, Authentication authentication) {
        SurveyDTO updatedSurvey = surveyService.updateSurvey(id, surveyDTO, authentication);
        return ResponseEntity.ok(updatedSurvey);
    }

    // Delete survey (Author only, check ownership)
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('AUTHOR')")
    public ResponseEntity<HttpStatus> deleteSurvey(@PathVariable Long id, Authentication authentication) {
        surveyService.deleteSurvey(id, authentication);
        return ResponseEntity.noContent().build();
    }

    // Get public surveys (for Explorers)
    @GetMapping("/public")
    public ResponseEntity<Page<SurveyDTO>> getPublicSurveys(Pageable pageable) {
        Page<SurveyDTO> surveys = surveyService.getPublicSurveys(pageable);
        return ResponseEntity.ok(surveys);
    }

    // Record survey attendance (Explorer only)
    @PostMapping("/{id}/attend")
    @PreAuthorize("hasRole('EXPLORER')")
    public ResponseEntity<AttendanceDTO> attendSurvey(@PathVariable Long id, Authentication authentication) {
        AttendanceDTO attendanceDTO = surveyService.attendSurvey(id, authentication);
        return ResponseEntity.status(HttpStatus.CREATED).body(attendanceDTO);
    }

    // Submit survey responses (Explorer only)
    @PostMapping("/{id}/responses")
    @PreAuthorize("hasRole('EXPLORER')")
    public ResponseEntity<String> submitResponses(
            @PathVariable Long id,
            @Valid @RequestBody List<ResponseDTO> responseDTOs,  // Assuming a list of responses
            Authentication authentication
    ) {
        surveyService.submitResponses(id, responseDTOs, authentication);
        return ResponseEntity.ok("Responses submitted successfully!");

    }
}