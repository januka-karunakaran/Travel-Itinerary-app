package com.travelitinerary.controller;

import com.travelitinerary.model.Itinerary;
import com.travelitinerary.repository.TripRepository;
import com.travelitinerary.service.GeminiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/trips")
@CrossOrigin(origins = "*") // Allows React to talk to Spring Boot
public class TripController {

    @Autowired private GeminiService geminiService;
    @Autowired private TripRepository tripRepository;

    @PostMapping("/generate")
    public Itinerary generate(@RequestBody Itinerary tripRequest) {
        // 1. Get AI Plan
        String aiPlan = geminiService.getAIItinerary(
            tripRequest.getDestination(), 
            tripRequest.getDays(), 
            tripRequest.getBudget()
        );
        
        // 2. Attach plan and save to MongoDB
        tripRequest.setPlanText(aiPlan);
        return tripRepository.save(tripRequest);
    }

    @GetMapping("/user/{userId}")
    public List<Itinerary> getHistory(@PathVariable String userId) {
        return tripRepository.findByUserId(userId);
    }
}