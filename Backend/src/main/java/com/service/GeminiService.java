package com.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.*;

@Service
public class GeminiService {

    // This pulls your key from application.properties
    @Value("${gemini.api.key}")
    private String apiKey;

    private final String GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=";

    public String getAIItinerary(String destination, int days, String budget) {
        RestTemplate restTemplate = new RestTemplate();
        String url = GEMINI_API_URL + apiKey;

        // 1. Build a professional Prompt (This is the 'AI Wrapping' skill)
        String promptText = String.format(
            "You are an expert travel agent. Create a highly detailed %d-day itinerary for a trip to %s. " +
            "The budget is %s. For each day, provide a morning, afternoon, and evening activity. " +
            "Format the output with clear 'Day X' headings.", 
            days, destination, budget
        );

        // 2. Construct the JSON Request Body required by Google Gemini
        Map<String, Object> requestBody = Map.of(
            "contents", List.of(Map.of(
                "parts", List.of(Map.of("text", promptText))
            ))
        );

        try {
            // 3. Make the POST request to the AI API
            Map<String, Object> response = restTemplate.postForObject(url, requestBody, Map.class);

            // 4. Navigate the nested JSON response to get the text
            List candidates = (List) response.get("candidates");
            Map content = (Map) ((Map) candidates.get(0)).get("content");
            List parts = (List) content.get("parts");
            
            return (String) ((Map) parts.get(0)).get("text");
        } catch (Exception e) {
            e.printStackTrace();
            return "Error: The AI Service is currently unavailable. Please try again later.";
        }
    }
}
