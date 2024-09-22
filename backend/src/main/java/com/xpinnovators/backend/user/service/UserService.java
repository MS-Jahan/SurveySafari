package com.xpinnovators.backend.user.service;

import com.xpinnovators.backend.exception.ForbiddenException;
import com.xpinnovators.backend.exception.ResourceNotFoundException;
import com.xpinnovators.backend.user.dto.ExplorerDTO;
import com.xpinnovators.backend.user.dto.SocialLinkDTO;
import com.xpinnovators.backend.user.dto.UserDTO;
import com.xpinnovators.backend.user.entity.Explorer;
import com.xpinnovators.backend.user.entity.SocialLink;
import com.xpinnovators.backend.user.entity.User;
import com.xpinnovators.backend.user.repository.ExplorerRepository;
import com.xpinnovators.backend.user.repository.SocialLinkRepository;
import com.xpinnovators.backend.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private SocialLinkRepository socialLinkRepository;

    private final UserRepository userRepository;
    private final ExplorerRepository explorerRepository;

    public UserService(UserRepository userRepository, ExplorerRepository explorerRepository) {
        this.userRepository = userRepository;
        this.explorerRepository = explorerRepository;
    }

    public Page<UserDTO> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable)
                .map(user -> new UserDTO(user));
    }

    public UserDTO getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
        return new UserDTO(user);
    }

    public UserDTO updateUser(Long userId, UserDTO userDTO, Authentication authentication) {
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        // Authorization check: Ensure user can only update their own profile unless they are an admin
        if (!authentication.getName().equals(existingUser.getUsername()) && !hasRole(authentication, "ADMIN")) {
            throw new ForbiddenException("You do not have permission to update this user.");
        }
        // ... Update fields
        existingUser.setName(userDTO.getName());
        // ...Update other allowed fields 

        User updatedUser = userRepository.save(existingUser);
        return new UserDTO(updatedUser);
    }

    public void deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
        userRepository.delete(user);
    }

    // Helper method to check user role
    private boolean hasRole(Authentication authentication, String role) {
        return authentication.getAuthorities().stream()
                .anyMatch(auth -> auth.getAuthority().equals("ROLE_" + role));
    }

    // Get a paginated list of Explorers sorted by points in descending order
    public Page<ExplorerDTO> getLeaderboard(Pageable pageable) {
        return explorerRepository.findAllByOrderByPointDesc(pageable)
                .map(ExplorerDTO::new); // Assuming you have an ExplorerDTO
    }

    public List<SocialLinkDTO> updateSocialLinks(List<SocialLinkDTO> socialLinkDTOs, Authentication authentication) {
        User user = userRepository.findByUsername(authentication.getName());
        Explorer explorer = user.getExplorer();

        if (explorer == null) {
            throw new ForbiddenException("Only Explorers can update social links.");
        }

        // Remove existing social links
        socialLinkRepository.deleteByExplorerId(explorer.getId());

        // Add updated social links
        for (SocialLinkDTO dto : socialLinkDTOs) {
            SocialLink socialLink = new SocialLink();
            socialLink.setExplorer(explorer);
            socialLink.setPlatform(dto.getPlatform());
            socialLink.setLink(dto.getLink());
            socialLinkRepository.save(socialLink);
        }

        // Return updated social links (optional)
        return socialLinkRepository.findByExplorerId(explorer.getId())
                .stream()
                .map(socialLink -> new SocialLinkDTO(socialLink))
                .collect(Collectors.toList());
    }
}