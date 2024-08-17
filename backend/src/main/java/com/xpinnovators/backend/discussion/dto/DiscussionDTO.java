package com.xpinnovators.backend.discussion.dto;

import com.xpinnovators.backend.discussion.entity.Discussion;

public class DiscussionDTO {
    private Long id;
    private String title;
    private String content;

    // Constructor to convert Discussion entity to DiscussionDTO
    public DiscussionDTO(Discussion discussion) {
        this.id = discussion.getId();
        this.title = discussion.getTitle();
        this.content = discussion.getContent();
        // Add other fields as needed
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}