package com.xpinnovators.backend.survey.dto;

import javax.validation.constraints.NotBlank;

public class ResponseDTO {

    @NotBlank
    private String responseData;

    // Constructors, getters, and setters

    public ResponseDTO() {
        // Default constructor
    }

    public ResponseDTO(String responseData) {
        this.responseData = responseData;
    }

    public String getResponseData() {
        return responseData;
    }

    public void setResponseData(String responseData) {
        this.responseData = responseData;
    }
}