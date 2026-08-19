package com.travelitinerary.controller;

import com.travelitinerary.model.User;
import com.travelitinerary.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // Connects to your Vite/React port
public class AuthController {

    @Autowired 
    private UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
        try {
            if(userRepository.findByEmail(user.getEmail()) != null) {
                return ResponseEntity.badRequest().body(message("Email already exists!"));
            }
            User savedUser = userRepository.save(user);
            Map<String, Object> response = new HashMap<>();
            response.put("message", "User created successfully");
            response.put("userId", savedUser.getId());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(message("Signup failed: " + e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        try {
            User existing = userRepository.findByEmail(user.getEmail());
            
            if (existing != null && existing.getPassword().equals(user.getPassword())) {
                // Success: Return the full user object (including ID)
                Map<String, Object> response = new HashMap<>();
                response.put("message", "Login successful");
                response.put("userId", existing.getId());
                response.put("name", existing.getName());
                response.put("email", existing.getEmail());
                return ResponseEntity.ok(response);
            }
            // Failure: Return error status
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(message("Invalid Credentials"));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(message("Login failed: " + e.getMessage()));
        }
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody User user) {
        try {
            if (user == null || user.getEmail() == null || user.getEmail().isBlank()) {
                return ResponseEntity.badRequest().body(message("Email is required"));
            }

            User existing = userRepository.findByEmail(user.getEmail().trim());
            if (existing == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(message("No account found for this email"));
            }

            // In production this would trigger an email workflow with a signed reset token.
            return ResponseEntity.ok(message("Reset instructions sent to your email"));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(message("Password reset failed: " + e.getMessage()));
        }
    }

    private Map<String, String> message(String text) {
        Map<String, String> response = new HashMap<>();
        response.put("message", text);
        return response;
    }
}