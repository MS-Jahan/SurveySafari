package com.xpinnovators.backend.user.service;

import com.xpinnovators.backend.user.repository.AdminRepository;
import com.xpinnovators.backend.user.repository.AuthorRepository;
import com.xpinnovators.backend.user.repository.ExplorerRepository;
import com.xpinnovators.backend.user.repository.UserRepository;
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
