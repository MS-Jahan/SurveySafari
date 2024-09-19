package com.xpinnovators.backend.survey.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Enum representing the status of a survey.
 */
public enum SurveyStatus {
    PUBLIC("public"),
    PRIVATE("private");

    private final String surveyStatus;

    SurveyStatus(String contactType){
        this.surveyStatus=contactType;
    }

    @JsonValue
    public String getSurveyStatus() {
        return surveyStatus;
    }

    @JsonCreator
    public static SurveyStatus fromValue(String value) {
        for (SurveyStatus contact : values()) {
            String currentContact = contact.getSurveyStatus();
            if (currentContact.equals(value)) {
                return contact;
            }
        }

        // Return a response entity with a 400 Bad Request status
        throw new IllegalArgumentException("Invalid value for Contact type Enum: " + value);
    }
}