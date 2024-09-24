package com.xpinnovators.backend.authentication.controller;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import com.xpinnovators.backend.authentication.service.JwtUtil;
import com.xpinnovators.backend.firebase.FirebaseUserService;
import com.xpinnovators.backend.user.entity.Author;
import com.xpinnovators.backend.user.entity.Explorer;
import com.xpinnovators.backend.user.entity.User;
import com.xpinnovators.backend.user.repository.AdminRepository;
import com.xpinnovators.backend.user.repository.AuthorRepository;
import com.xpinnovators.backend.user.repository.ExplorerRepository;
import com.xpinnovators.backend.user.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
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

    @Autowired
    private FirebaseUserService firebaseUserService;

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    private void deleteFirebaseUser(String firebaseUid) {
        try {
            FirebaseAuth.getInstance().deleteUser(firebaseUid);
        } catch (FirebaseAuthException e) {
            // Handle Firebase account deletion errors
            ;
        }
    }

    // @Transactional
    @PostMapping("/register")
    public ResponseEntity<?> registerFirebase(@RequestBody User user, BindingResult result, HttpServletRequest request) {
        String firebaseUid;
        try {
            // Retrieve Firebase ID token from the Authorization header:
            String idToken = request.getHeader("Authorization").replace("Bearer ", "");

            // Verify the ID token:
            FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(idToken);

            // Get UID from the decoded token:
            firebaseUid = decodedToken.getUid();
        } catch (FirebaseAuthException e) {
            // Handle Firebase token verification errors
            return ResponseEntity.badRequest().body("Invalid Firebase token: " + e.getMessage());
        }

        try {

            // Check if email is already registered in your database
            if (userRepository.findByEmail(user.getEmail()) != null) {
                return ResponseEntity.badRequest().body("Email already exists");
            }

            // ... (Input validation for other fields - name, email, username, userType) ...
            if (result.hasErrors()) {
                Map<String, String> errors = new HashMap<>();
                result.getFieldErrors().forEach(error -> errors.put(error.getField(), error.getDefaultMessage()));
                // remove the Firebase account as validation failed
                deleteFirebaseUser(firebaseUid);
                return ResponseEntity.badRequest().body(errors);
            }

            if (userRepository.findByUsername(user.getUsername()) != null) {
                // remove the Firebase account as validation failed
                deleteFirebaseUser(firebaseUid);
                return ResponseEntity.badRequest().body("Username already exists");
            }

            if (userRepository.findByEmail(user.getEmail()) != null) {
                // remove the Firebase account as validation failed
                deleteFirebaseUser(firebaseUid);
                return ResponseEntity.badRequest().body("Email already exists");
            }

            String userType = user.getUserType();
            if (userType == null || userType.isEmpty()) {
                // remove the Firebase account as validation failed
                deleteFirebaseUser(firebaseUid);
                return ResponseEntity.badRequest().body("User type cannot be null or empty");
            }

            // check if name is empty
            if (user.getName() == null || user.getName().isEmpty()) {
                // remove the Firebase account as validation failed
                deleteFirebaseUser(firebaseUid);
                return ResponseEntity.badRequest().body("Name cannot be empty");
            }

            // check if email is empty
            if (user.getEmail() == null || user.getEmail().isEmpty()) {
                // remove the Firebase account as validation failed
                deleteFirebaseUser(firebaseUid);
                return ResponseEntity.badRequest().body("Email cannot be empty");
            }

            user.setFirebaseId(firebaseUid);

            // set custom claims if needed
            firebaseUserService.setCustomClaims(firebaseUid, userType);

            // ... (Handle User Type and save user to database - same as your existing logic) ...
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

        } catch (FirebaseAuthException e) {
            // Handle Firebase token verification errors
            deleteFirebaseUser(firebaseUid);
            return ResponseEntity.badRequest().body("Invalid Firebase token: " + e.getMessage());
        } catch (Exception e) {
            // Handle other errors
            deleteFirebaseUser(firebaseUid);
            return ResponseEntity.badRequest().body("User registration failed: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginFirebase(@RequestBody Map<String, String> requestBody, HttpServletRequest request) {
        String firebaseUid = requestBody.get("firebaseUid");
        String firebaseToken = request.getHeader("Authorization").replace("Bearer ", ""); // Get ID token from header

        try {
            // Verify the Firebase ID token
            FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(firebaseToken);

            // Retrieve user from database
            User user = userRepository.findByFirebaseId(firebaseUid);
            if (user == null) {
                return ResponseEntity.badRequest().body("User not found.");
            }

            // (Optional) Set custom claims if needed
            firebaseUserService.setCustomClaims(firebaseUid, user.getUserType());

            // Generate JWT
            String token = jwtUtil.generateToken(user.getUsername());
            // return all user info except password in the body and set the token in the cookie
            // user.setPassword(null);
            return ResponseEntity.ok().header("Set-Cookie", "token=" + token + "; Path=/; Expires=Thu, 01 Jan 2099 00:00:00 GMT; HttpOnly; SameSite=None; Secure").body(user);
            //  HttpOnly; Path=/; SameSite=None; Secure

        } catch (FirebaseAuthException e) {
            // Handle Firebase token verification errors
            return ResponseEntity.badRequest().body("Invalid Firebase token.");
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        return ResponseEntity.ok().header("Set-Cookie", "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; SameSite=None; Secure").body("Logged out successfully");
    }

    @GetMapping("/user")
    public ResponseEntity<?> getUser(@CookieValue("token") String token) {
        String username = jwtUtil.extractUsername(token);
        // print username
        logger.info("Username: {}", username);
        User user = userRepository.findByUsername(username);
        logger.info("User: {}", user);
        if (user != null) {
            // user.setPassword(null); // Remove password before returning user info
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.badRequest().body("User not found");
    }
}
