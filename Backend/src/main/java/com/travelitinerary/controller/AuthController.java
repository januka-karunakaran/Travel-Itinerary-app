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
                Map<String, String> response = new HashMap<>();
                response.put("message", "Email already exists!");
                return ResponseEntity.badRequest().body(response);
            }
            User savedUser = userRepository.save(user);
            Map<String, Object> response = new HashMap<>();
            response.put("message", "User created successfully");
            response.put("userId", savedUser.getId());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            Map<String, String> response = new HashMap<>();
            response.put("message", "Signup failed: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
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
            Map<String, String> response = new HashMap<>();
            response.put("message", "Invalid Credentials");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        } catch (Exception e) {
            e.printStackTrace();
            Map<String, String> response = new HashMap<>();
            response.put("message", "Login failed: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}