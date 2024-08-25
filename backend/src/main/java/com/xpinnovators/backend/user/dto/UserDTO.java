package com.xpinnovators.backend.user.dto;

import com.xpinnovators.backend.user.entity.Admin;
import com.xpinnovators.backend.user.entity.Author;
import com.xpinnovators.backend.user.entity.Explorer;
import com.xpinnovators.backend.user.entity.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private Long id;
    private String userType;
    private Long entityId;
    private String name;
    private String email;
    private String username;
    private ExplorerDTO explorer;
    private AuthorDTO author;
    // ... other fields (explorer, author, admin DTOs)

    // Constructors, Getters, Setters

    public UserDTO(User user) {
        this.id = user.getId();
        this.userType = user.getUserType();
        this.entityId = user.getEntityId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.username = user.getUsername();
        this.explorer = user.getExplorer() != null ? new ExplorerDTO(user.getExplorer()) : null;
        this.author = user.getAuthor() != null ? new AuthorDTO(user.getAuthor()) : null;
        // ... (map other fields as needed)
    }

    // Add this method to convert UserDTO to User entity
    public User toEntity() {
        User user = new User();
        user.setId(this.id);
        user.setUserType(this.userType);
        user.setEntityId(this.entityId);
        user.setName(this.name);
        user.setEmail(this.email);
        user.setUsername(this.username);
        // ... (map other fields if needed)
        return user;
    }

}