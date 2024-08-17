package com.xpinnovators.backend.discussion.controller;

import com.xpinnovators.backend.discussion.dto.CommentDTO;
import com.xpinnovators.backend.discussion.dto.DiscussionDTO;
import com.xpinnovators.backend.discussion.service.DiscussionService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("api/discussions")
public class DiscussionController {
    private final DiscussionService discussionService;

    public DiscussionController(DiscussionService discussionService) {
        this.discussionService = discussionService;
    }

    // 1. Create a new discussion topic
    @PostMapping
    public ResponseEntity<DiscussionDTO> createDiscussion(@Valid @RequestBody DiscussionDTO discussionDTO, Authentication authentication) {
        DiscussionDTO createdDiscussion = discussionService.createDiscussion(discussionDTO, authentication);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDiscussion);
    }

    // 2. Get all discussions (with pagination)
    @GetMapping
    public ResponseEntity<Page<DiscussionDTO>> getAllDiscussions(Pageable pageable) {
        return ResponseEntity.ok(discussionService.getAllDiscussions(pageable));
    }

    // 3. Get discussion by ID
    @GetMapping("/{discussionId}")
    public ResponseEntity<DiscussionDTO> getDiscussionById(@PathVariable Long discussionId) {
        return ResponseEntity.ok(discussionService.getDiscussionById(discussionId));
    }

    // 4. Add comment to discussion
    @PostMapping("/{discussionId}/comments")
    public ResponseEntity<CommentDTO> addCommentToDiscussion(@PathVariable Long discussionId,
                                                             @Valid @RequestBody CommentDTO commentDTO,
                                                             Authentication authentication) {
        CommentDTO addedComment = discussionService.addCommentToDiscussion(discussionId, commentDTO, authentication);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedComment);
    }

    // 5. Update comment (only the commenter or Admin can update)
    @PutMapping("/comments/{commentId}")
    @PreAuthorize("#authentication.name == #commentDTO.username or hasRole('ADMIN')") // SpEL for authorization
    public ResponseEntity<CommentDTO> updateComment(@PathVariable Long commentId,
                                                    @Valid @RequestBody CommentDTO commentDTO,
                                                    Authentication authentication) {
        CommentDTO updatedComment = discussionService.updateComment(commentId, commentDTO, authentication);
        return ResponseEntity.ok(updatedComment);
    }

    // 6. Delete comment (only the commenter or Admin can delete)
    @DeleteMapping("/comments/{commentId}")
    @PreAuthorize("#authentication.name == #commentDTO.username or hasRole('ADMIN')") // SpEL for authorization
    public ResponseEntity<HttpStatus> deleteComment(@PathVariable Long commentId, Authentication authentication) {
        discussionService.deleteComment(commentId, authentication);
        return ResponseEntity.noContent().build();
    }
}