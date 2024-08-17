package com.xpinnovators.backend.discussion.dto;

import com.xpinnovators.backend.discussion.entity.Comment;

public class CommentDTO {
    private Long id;
    private String content;
    private String username;

    // Constructor to convert Comment entity to CommentDTO
    public CommentDTO(Comment comment) {
        this.id = comment.getId();
        this.content = comment.getContent();
        this.username = comment.getUser().getUsername();
        // Add other fields as needed
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}