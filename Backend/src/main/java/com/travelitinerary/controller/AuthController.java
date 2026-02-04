package com.travelitinerary.controller;

import com.travelitinerary.model.User;
import com.travelitinerary.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // Connects to your Vite/React port
public class AuthController {

    @Autowired 
    private UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
        if(userRepository.findByEmail(user.getEmail()) != null) {
            return ResponseEntity.badRequest().body("Email already exists!");
        }
        return ResponseEntity.ok(userRepository.save(user));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User existing = userRepository.findByEmail(user.getEmail());
        
        if (existing != null && existing.getPassword().equals(user.getPassword())) {
            // Success: Return the full user object (including ID)
            return ResponseEntity.ok(existing);
        }
        // Failure: Return error status
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials");
    }
}