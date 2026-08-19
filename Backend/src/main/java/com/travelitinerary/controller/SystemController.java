package com.travelitinerary.controller;

import com.travelitinerary.repository.BookingRepository;
import com.travelitinerary.repository.TripRepository;
import com.travelitinerary.repository.UserRepository;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/system")
@CrossOrigin(origins = "http://localhost:5173")
public class SystemController {

    private final UserRepository userRepository;
    private final TripRepository tripRepository;
    private final BookingRepository bookingRepository;
    private final MongoTemplate mongoTemplate;

    public SystemController(
            UserRepository userRepository,
            TripRepository tripRepository,
            BookingRepository bookingRepository,
            MongoTemplate mongoTemplate
    ) {
        this.userRepository = userRepository;
        this.tripRepository = tripRepository;
        this.bookingRepository = bookingRepository;
        this.mongoTemplate = mongoTemplate;
    }

    @GetMapping("/overview")
    public Map<String, Object> getOverview() {
        Map<String, Object> summary = new HashMap<>();
        summary.put("users", userRepository.count());
        summary.put("trips", tripRepository.count());
        summary.put("bookings", bookingRepository.count());
        summary.put("guides", mongoTemplate.getCollection("tourGuides").countDocuments());
        summary.put("districts", mongoTemplate.getCollection("districts").countDocuments());
        summary.put("serverTime", Instant.now().toString());
        return summary;
    }
}
