package com.fatinsabit.surveysafari.discussion.service;

import com.fatinsabit.surveysafari.discussion.repository.CommentRepository;
import com.fatinsabit.surveysafari.discussion.repository.DiscussionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DiscussionService {

    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private DiscussionRepository discussionRepository;
}
