package com.xpinnovators.backend.discussion.controller;

import com.xpinnovators.backend.discussion.service.DiscussionService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/discussion")
public class DiscussionController {
    private final DiscussionService discussionService;

    public DiscussionController(DiscussionService discussionService) {
        this.discussionService = discussionService;
    }
}
