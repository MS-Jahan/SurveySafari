package com.fatinsabit.surveysafari.user.service;

import com.fatinsabit.surveysafari.user.repository.AdminRepository;
import com.fatinsabit.surveysafari.user.repository.AuthorRepository;
import com.fatinsabit.surveysafari.user.repository.ExplorerRepository;
import com.fatinsabit.surveysafari.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AdminRepository adminRepository;
    @Autowired
    private AuthorRepository authorRepository;
    @Autowired
    private ExplorerRepository explorerRepository;
}
