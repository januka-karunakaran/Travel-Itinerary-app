package com.travelitinerary.controller;

import com.travelitinerary.model.User;
import com.travelitinerary.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired private UserRepository userRepository;

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        System.out.println("🔵 Signup Request - Email: " + user.getEmail() + ", Name: " + user.getName());
        User saved = userRepository.save(user);
        System.out.println("✅ User saved with ID: " + saved.getId());
        return saved;
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        System.out.println("🔵 Login attempt - Email: " + user.getEmail());
        User existing = userRepository.findByEmail(user.getEmail());
        if (existing == null) {
            System.out.println("❌ User not found in database");
            throw new RuntimeException("Invalid Credentials");
        }
        System.out.println("✅ User found - Checking password...");
        if (existing.getPassword().equals(user.getPassword())) {
            System.out.println("✅ Password matches! Login successful");
            return existing;
        }
        System.out.println("❌ Password mismatch");
        throw new RuntimeException("Invalid Credentials");
    }
}