package com.xpinnovators.backend.survey.dto;

import com.xpinnovators.backend.survey.entity.Survey;
import com.xpinnovators.backend.user.dto.AuthorDTO;
import com.xpinnovators.backend.user.entity.Author;
import lombok.*;

import javax.validation.constraints.NotBlank;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SurveyDTO {
    private Long id;
    @NotBlank
    private String title;
    private String description;
    // private AuthorDTO author; // Make sure you have AuthorDTO
    private String status;
    private String shareLink;
    private String googleSheetLink;
    private String content;

    // Constructor to create SurveyDTO from Survey entity
    public SurveyDTO(Survey survey) {
        this.id = survey.getId();
        this.title = survey.getTitle();
        this.description = survey.getDescription();
        // this.author = new AuthorDTO(survey.getAuthor()); // Map author to AuthorDTO
        this.status = survey.getStatus();
        this.shareLink = survey.getShareLink();
        this.googleSheetLink = survey.getGoogleSheetLink();
        this.content = survey.getContent();
    }

    // Method to convert SurveyDTO to Survey entity
    public Survey toEntity() {
        Survey survey = new Survey();
        survey.setId(id);
        survey.setTitle(title);
        survey.setDescription(description);
//        Author authorEntity = new Author(); // Create an Author entity
//        authorEntity.setId(author.getId()); // Set the Author's id
//        survey.setAuthor(authorEntity);
        // survey.setCreatedAt(createdAt); // This should be set in the service
        survey.setStatus(status);
        survey.setShareLink(shareLink);
        survey.setGoogleSheetLink(googleSheetLink);
        survey.setContent(content);
        return survey;
    }
}

