package com.xpinnovators.backend.discussion.service;

import com.xpinnovators.backend.discussion.repository.CommentRepository;
import com.xpinnovators.backend.discussion.repository.DiscussionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DiscussionService {

    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private DiscussionRepository discussionRepository;
}
