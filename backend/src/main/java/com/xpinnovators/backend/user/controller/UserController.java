package com.xpinnovators.backend.user.controller;

import com.xpinnovators.backend.exception.ResourceNotFoundException;
import com.xpinnovators.backend.user.dto.SocialLinkDTO;
import com.xpinnovators.backend.user.dto.UserDTO;
import com.xpinnovators.backend.user.entity.User;
import com.xpinnovators.backend.user.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import com.xpinnovators.backend.user.dto.ExplorerDTO;
import com.xpinnovators.backend.user.entity.Explorer;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/users") // Updated route
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Get all users (Admin only)
    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Page<UserDTO>> getAllUsers(Pageable pageable) {
        Page<UserDTO> userDTOs = userService.getAllUsers(pageable);
        return ResponseEntity.ok(userDTOs);
    }

    // Get user by ID
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
        UserDTO userDTO = userService.getUserById(id);
        return ResponseEntity.ok(userDTO);
    }

    // Update user profile (ensure only own profile or Admin)
    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(
            @PathVariable Long id, @Valid @RequestBody UserDTO userDTO, Authentication authentication) {
        UserDTO updatedUserDTO = userService.updateUser(id, userDTO, authentication);
        return ResponseEntity.ok(updatedUserDTO);
    }

    // Delete user (Admin only)
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/leaderboard")
    public ResponseEntity<Page<ExplorerDTO>> getLeaderboard(Pageable pageable) {
        Page<ExplorerDTO> leaderboard = userService.getLeaderboard(pageable);
        return ResponseEntity.ok(leaderboard);
    }

    // Update social links for the logged-in Explorer
    @PutMapping("/social-links")
    @PreAuthorize("hasRole('EXPLORER')")
    public ResponseEntity<List<SocialLinkDTO>> updateSocialLinks(
            @Valid @RequestBody List<SocialLinkDTO> socialLinkDTOs,
            Authentication authentication
    ) {
        List<SocialLinkDTO> updatedSocialLinks = userService.updateSocialLinks(socialLinkDTOs, authentication);
        return ResponseEntity.ok(updatedSocialLinks);
    }
}