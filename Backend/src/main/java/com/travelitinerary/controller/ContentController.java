package com.travelitinerary.controller;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/content")
@CrossOrigin(origins = "http://localhost:5173")
public class ContentController {

    private final MongoTemplate mongoTemplate;

    public ContentController(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @GetMapping("/districts")
    public List<?> getDistricts() {
        return mongoTemplate.findAll(Map.class, "districts");
    }

    @GetMapping("/itineraries")
    public List<?> getItineraryPlans() {
        return mongoTemplate.findAll(Map.class, "itineraryPlans");
    }

    @GetMapping("/guides")
    public List<?> getTourGuides() {
        return mongoTemplate.findAll(Map.class, "tourGuides");
    }
}
