package com.xpinnovators.backend.survey.dto;

import com.xpinnovators.backend.survey.entity.Survey;

import javax.validation.constraints.NotBlank;
import java.sql.Timestamp;

public class SurveyDTO {

    private Long id;

    @NotBlank
    private String title;

    private String description;

    // ... other fields as needed

    private String status;
    private String shareLink;
    private String googleSheetLink;
    private String content;

    // Constructors, Getters, and Setters

    // Constructor to create SurveyDTO from Survey entity
    public SurveyDTO(Survey survey) {
        this.id = survey.getId();
        this.title = survey.getTitle();
        this.description = survey.getDescription();
        // ... other fields
        this.status = survey.getStatus();
        this.shareLink = survey.getShareLink();
        this.googleSheetLink = survey.getGoogleSheetLink();
        this.content = survey.getContent();
    }


    // Method to convert SurveyDTO to Survey entity (you'll need to handle Author)
    public Survey toEntity() {
        Survey survey = new Survey();
        survey.setId(id);
        survey.setTitle(title);
        survey.setDescription(description);
        // ... set other fields
        survey.setStatus(status);
        survey.setShareLink(shareLink);
        survey.setGoogleSheetLink(googleSheetLink);
        survey.setContent(content);
        return survey;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }
}