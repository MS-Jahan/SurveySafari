package com.fatinsabit.surveysafari;

import com.fatinsabit.surveysafari.entity.Admin;
import com.fatinsabit.surveysafari.entity.Author;
import com.fatinsabit.surveysafari.entity.Explorer;
import com.fatinsabit.surveysafari.entity.User;
import com.fatinsabit.surveysafari.repository.AdminRepository;
import com.fatinsabit.surveysafari.repository.AuthorRepository;
import com.fatinsabit.surveysafari.repository.ExplorerRepository;
import com.fatinsabit.surveysafari.repository.UserRepository;
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

        if (user.getPassword() == null || user.getPassword().isEmpty()) {
            return ResponseEntity.badRequest().body("Password cannot be empty");
        }

        String userType = user.getUserType();
        if (userType == null || userType.isEmpty()) {
            return ResponseEntity.badRequest().body("User type cannot be null or empty");
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

                case "admin":
                    Admin admin = new Admin();
                    // Populate Admin fields from user or request data if needed
                    admin = adminRepository.save(admin);
                    user.setEntityId(admin.getId());
                    user.setAdmin(admin);
                    break;

                default:
                    return ResponseEntity.badRequest().body("Invalid user type");
            }

            User savedUser = userRepository.save(user);
            return ResponseEntity.ok("User registered successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("User registration failed");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginUser) {
        User user = userRepository.findByUsername(loginUser.getUsername());
        if (user != null && passwordEncoder.matches(loginUser.getPassword(), user.getPassword())) {
            String token = jwtUtil.generateToken(user.getUsername());
            return ResponseEntity.ok().header("Set-Cookie", "token=" + token + "; HttpOnly").body("{\"username\":\"" + user.getUsername() + "\"}");
        }
        return ResponseEntity.badRequest().body("Invalid username or password");
    }

    @GetMapping("/user")
    public ResponseEntity<?> getUser(@CookieValue("token") String token) {
        String username = jwtUtil.extractUsername(token);
        User user = userRepository.findByUsername(username);
        if (user != null) {
            user.setPassword(null); // Remove password before returning
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.badRequest().body("User not found");
    }
}
