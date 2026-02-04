package com.tripgenie.repository;

import com.tripgenie.model.Itinerary;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TripRepository extends MongoRepository<Itinerary, String> {
    // Fetch all trips created by a specific User ID for the History page
    List<Itinerary> findByUserId(String userId);
}