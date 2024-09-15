package com.xpinnovators.backend.authentication.controller;

import com.xpinnovators.backend.authentication.service.JwtUtil;
import com.xpinnovators.backend.user.dto.UserDTO;
import com.xpinnovators.backend.user.entity.Admin;
import com.xpinnovators.backend.user.entity.Author;
import com.xpinnovators.backend.user.entity.Explorer;
import com.xpinnovators.backend.user.entity.User;
import com.xpinnovators.backend.user.repository.AdminRepository;
import com.xpinnovators.backend.user.repository.AuthorRepository;
import com.xpinnovators.backend.user.repository.ExplorerRepository;
import com.xpinnovators.backend.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import org.springframework.validation.BindingResult;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ExplorerRepository explorerRepository;

    @Autowired
    private AuthorRepository authorRepository;

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result) {
        if (result.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            result.getFieldErrors().forEach(error -> errors.put(error.getField(), error.getDefaultMessage()));
            return ResponseEntity.badRequest().body(errors);
        }

        if (userRepository.findByUsername(user.getUsername()) != null) {
            return ResponseEntity.badRequest().body("Username already exists");
        }

        if (userRepository.findByEmail(user.getEmail()) != null) {
            return ResponseEntity.badRequest().body("Email already exists");
        }

        if (user.getPassword() == null || user.getPassword().isEmpty()) {
            return ResponseEntity.badRequest().body("Password cannot be empty");
        }

        String userType = user.getUserType();
        if (userType == null || userType.isEmpty()) {
            return ResponseEntity.badRequest().body("User type cannot be null or empty");
        }

        // check if name is empty
        if (user.getName() == null || user.getName().isEmpty()) {
            return ResponseEntity.badRequest().body("Name cannot be empty");
        }

        // check if email is empty
        if (user.getEmail() == null || user.getEmail().isEmpty()) {
            return ResponseEntity.badRequest().body("Email cannot be empty");
        }

        try {
            user.setPassword(passwordEncoder.encode(user.getPassword()));

            switch (userType.toLowerCase()) {
                case "explorer":
                    Explorer explorer = new Explorer();
                    // Populate Explorer fields from user or request data if needed
                    explorer = explorerRepository.save(explorer);
                    user.setEntityId(explorer.getId());
                    user.setExplorer(explorer);
                    break;

                case "author":
                    Author author = new Author();
                    // Populate Author fields from user or request data if needed
                    author = authorRepository.save(author);
                    user.setEntityId(author.getId());
                    user.setAuthor(author);
                    break;

//                case "admin":
//                    Admin admin = new Admin();
//                    admin = adminRepository.save(admin); // Ensure the Admin entity has valid data if required
//                    if (admin.getId() == null) {
//                        return ResponseEntity.badRequest().body("Failed to save Admin entity.");
//                    }
//                    user.setEntityId(admin.getId());
//                    user.setAdmin(admin);
//                    break;

                default:
                    return ResponseEntity.badRequest().body("Invalid user type");
            }
            user.setUserType(userType.toLowerCase());
            userRepository.save(user);
            return ResponseEntity.ok("User registered successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("User registration failed");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginUser) {
        User user = userRepository.findByEmail(loginUser.getEmail());
        if (user != null && passwordEncoder.matches(loginUser.getPassword(), user.getPassword())) {
            String token = jwtUtil.generateToken(user.getUsername());
            // return all user info except password in the body and set the token in the cookie
            user.setPassword(null);
            return ResponseEntity.ok().header("Set-Cookie", "token=" + token + "; Path=/; Expires=Thu, 01 Jan 2099 00:00:00 GMT; HttpOnly; SameSite=None; Secure").body(user);
            //  HttpOnly; Path=/; SameSite=None; Secure
        }
        return ResponseEntity.badRequest().body("Invalid username or password");
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        return ResponseEntity.ok().header("Set-Cookie", "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; SameSite=None; Secure").body("Logged out successfully");
    }

    @GetMapping("/user")
    public ResponseEntity<?> getUser(@CookieValue("token") String token) {
        String username = jwtUtil.extractUsername(token);
        User user = userRepository.findByUsername(username);
        if (user != null) {
            user.setPassword(null); // Remove password before returning user info
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.badRequest().body("User not found");
    }
}
