package com.xpinnovators.backend.firebase;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class FirebaseUserService {

    public UserRecord createUser(String email, String password) throws FirebaseAuthException {
        UserRecord.CreateRequest request = new UserRecord.CreateRequest()
                .setEmail(email)
                .setPassword(password);

        return FirebaseAuth.getInstance().createUser(request);
    }

    public UserRecord getUser(String uid) throws FirebaseAuthException {
        return FirebaseAuth.getInstance().getUser(uid);
    }

    public void setCustomClaims(String uid, String userType) throws FirebaseAuthException {
        Map<String, Object> claims = new HashMap<>();
        claims.put("role", userType); // Or use a different claim key

        FirebaseAuth.getInstance().setCustomUserClaims(uid, claims);
    }

    // Add more methods as needed for user management
}