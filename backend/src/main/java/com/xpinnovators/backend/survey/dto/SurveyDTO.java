package com.xpinnovators.backend.survey.dto;

import com.xpinnovators.backend.survey.entity.Survey;
import com.xpinnovators.backend.survey.entity.SurveyStatus;
import com.xpinnovators.backend.user.dto.AuthorDTO;
import com.xpinnovators.backend.user.entity.Author;
import lombok.*;

import javax.validation.constraints.NotBlank;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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
    private Timestamp postedAt;
    private String shareLink;
    private String googleSheetLink;
    private String content;
    private long responseCount;
    private List<String> tags;

    // Constructor to create SurveyDTO from Survey entity
    public SurveyDTO(Survey survey) {
        this.id = survey.getId();
        this.title = survey.getTitle();
        this.description = survey.getDescription();
        // this.author = new AuthorDTO(survey.getAuthor()); // Map author to AuthorDTO
        this.postedAt = survey.getCreatedAt();
        this.status = survey.getStatus();
        this.shareLink = survey.getShareLink();
        this.googleSheetLink = survey.getGoogleSheetLink();
        this.content = survey.getContent();
        this.responseCount = survey.getResponseCount();
        if (survey.getTags() != null) {
            this.tags = Arrays.asList(survey.getTags().split(","));
        } else {
            this.tags = new ArrayList<>(); // Or handle null as needed
        }
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

        // Convert List<String> back to comma-separated string
        if (this.tags != null) {
            survey.setTags(String.join(",", this.tags));
        }

        return survey;
    }
}

