package com.xpinnovators.backend.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xpinnovators.backend.user.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    User findByEmail(String email);

    User findByFirebaseId(String firebaseUid);
}