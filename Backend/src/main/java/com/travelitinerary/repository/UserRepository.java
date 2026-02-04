package com.tripgenie.repository;

import com.tripgenie.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    // Find a user by email for Login logic
    User findByEmail(String email);
}