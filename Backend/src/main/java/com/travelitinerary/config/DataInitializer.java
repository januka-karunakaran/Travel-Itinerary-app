package com.travelitinerary.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.travelitinerary.model.User;
import com.travelitinerary.repository.UserRepository;

@Component
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;

    public DataInitializer(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Check if test user already exists
        if (userRepository.findByEmail("sathurjanfit@gmail.com") == null) {
            User testUser = new User();
            testUser.setName("Sathur Jan");
            testUser.setEmail("sathurjanfit@gmail.com");
            testUser.setPassword("password123");
            userRepository.save(testUser);
            System.out.println("✓ Test user created: sathurjanfit@gmail.com / password123");
        }
    }
}
