package com.xpinnovators.backend.discussion.service;

import com.xpinnovators.backend.discussion.dto.CommentDTO;
import com.xpinnovators.backend.discussion.dto.DiscussionDTO;
import com.xpinnovators.backend.discussion.entity.Comment;
import com.xpinnovators.backend.discussion.entity.Discussion;
import com.xpinnovators.backend.discussion.repository.CommentRepository;
import com.xpinnovators.backend.discussion.repository.DiscussionRepository;
import com.xpinnovators.backend.exception.ForbiddenException;
import com.xpinnovators.backend.exception.ResourceNotFoundException;
import com.xpinnovators.backend.user.entity.User;
import com.xpinnovators.backend.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;

@Service
public class DiscussionService {

    // @Autowired
    private CommentRepository commentRepository;
    // @Autowired
    private DiscussionRepository discussionRepository;
    // @Autowired
    private final UserRepository userRepository;

    public DiscussionService(DiscussionRepository discussionRepository,
                             CommentRepository commentRepository,
                             UserRepository userRepository) {
        this.discussionRepository = discussionRepository;
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
    }

    // 1. Create Discussion
    public DiscussionDTO createDiscussion(DiscussionDTO discussionDTO, Authentication authentication) {
        User user = userRepository.findByUsername(authentication.getName());

        Discussion discussion = new Discussion();
        discussion.setTitle(discussionDTO.getTitle());
        discussion.setContent(discussionDTO.getContent());
        discussion.setCreatedBy(user);
        discussion.setCreatedAt(new Timestamp(System.currentTimeMillis()));
        return new DiscussionDTO(discussionRepository.save(discussion));
    }

    // 2. Get All Discussions (paginated)
    public Page<DiscussionDTO> getAllDiscussions(Pageable pageable) {
        return discussionRepository.findAll(pageable)
                .map(discussion -> new DiscussionDTO(discussion));
    }

    // 3. Get Discussion By ID
    public DiscussionDTO getDiscussionById(Long discussionId) {
        Discussion discussion = discussionRepository.findById(discussionId)
                .orElseThrow(() -> new ResourceNotFoundException("Discussion", "id", discussionId));
        return new DiscussionDTO(discussion);
    }

    // 4. Add Comment
    public CommentDTO addCommentToDiscussion(Long discussionId, CommentDTO commentDTO, Authentication authentication) {
        User user = userRepository.findByUsername(authentication.getName());
        Discussion discussion = discussionRepository.findById(discussionId)
                .orElseThrow(() -> new ResourceNotFoundException("Discussion", "id", discussionId));

        Comment comment = new Comment();
        comment.setContent(commentDTO.getContent());
        comment.setDiscussion(discussion);
        comment.setUser(user);
        comment.setCreatedAt(new Timestamp(System.currentTimeMillis()));
        return new CommentDTO(commentRepository.save(comment));
    }

    // 5. Update Comment
    public CommentDTO updateComment(Long commentId, CommentDTO commentDTO, Authentication authentication) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new ResourceNotFoundException("Comment", "id", commentId));

        // Authorization Check (already done using @PreAuthorize in the controller, but good practice to double-check)
        if (!comment.getUser().getUsername().equals(authentication.getName())) {
            throw new ForbiddenException("You are not authorized to update this comment.");
        }

        comment.setContent(commentDTO.getContent());
        // You can add logic to update other fields (e.g., upvotes) in the future
        return new CommentDTO(commentRepository.save(comment));
    }

    // 6. Delete Comment
    public void deleteComment(Long commentId, Authentication authentication) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new ResourceNotFoundException("Comment", "id", commentId));

        // Authorization Check (similar to updateComment)
        if (!comment.getUser().getUsername().equals(authentication.getName())) {
            throw new ForbiddenException("You are not authorized to delete this comment.");
        }

        commentRepository.delete(comment);
    }
}