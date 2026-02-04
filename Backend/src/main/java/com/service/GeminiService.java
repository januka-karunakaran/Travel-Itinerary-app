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
        // If API key is not configured, return a mock itinerary
        if (apiKey == null || apiKey.isEmpty() || apiKey.equals("YOUR_ACTUAL_API_KEY")) {
            return generateMockItinerary(destination, days, budget);
        }

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

    private String generateMockItinerary(String destination, int days, String budget) {
        StringBuilder itinerary = new StringBuilder();
        itinerary.append("🌍 ").append(days).append("-Day Itinerary for ").append(destination).append("\n");
        itinerary.append("💰 Budget: ").append(budget).append("\n\n");
        
        for (int i = 1; i <= days; i++) {
            itinerary.append("📅 Day ").append(i).append(":\n");
            itinerary.append("🌅 Morning: Explore local attractions and have breakfast at a nearby café\n");
            itinerary.append("☀️  Afternoon: Visit museums, markets, or natural landmarks\n");
            itinerary.append("🌆 Evening: Enjoy dinner at a local restaurant and take a evening walk\n\n");
        }
        
        itinerary.append("✨ Tips:\n");
        itinerary.append("- Use public transportation for cost-effective travel\n");
        itinerary.append("- Book accommodations in advance for better rates\n");
        itinerary.append("- Try local cuisine to experience authentic culture\n");
        itinerary.append("- Consider purchasing a local travel pass for attractions\n\n");
        itinerary.append("💡 To enable real AI-powered itineraries, set your Gemini API key in application.properties");
        
        return itinerary.toString();
    }
}
