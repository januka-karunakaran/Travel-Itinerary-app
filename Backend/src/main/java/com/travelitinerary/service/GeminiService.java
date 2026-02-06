package com.travelitinerary.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.*;

@Service
public class GeminiService {

    // This pulls your key from application.properties
    @Value("${gemini.api.key}")
    private String apiKey;

    private static final String GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=";
    private static final String UNEXPECTED_RESPONSE_ERROR = "Error: The AI Service returned an unexpected response.";
    private static final String NO_RESPONSE_ERROR = "Error: The AI Service returned no response. Please try again later.";

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
            Map<?, ?> response = restTemplate.postForObject(url, requestBody, Map.class);
            if (response == null) {
                return NO_RESPONSE_ERROR;
            }

            // 4. Navigate the nested JSON response to get the text
            Object candidatesObj = response.get("candidates");
            if (!(candidatesObj instanceof List<?> candidates) || candidates.isEmpty()) {
                return UNEXPECTED_RESPONSE_ERROR;
            }

            Object candidateObj = candidates.get(0);
            if (!(candidateObj instanceof Map<?, ?> candidateMap)) {
                return UNEXPECTED_RESPONSE_ERROR;
            }

            Object contentObj = candidateMap.get("content");
            if (!(contentObj instanceof Map<?, ?> contentMap)) {
                return UNEXPECTED_RESPONSE_ERROR;
            }

            Object partsObj = contentMap.get("parts");
            if (!(partsObj instanceof List<?> parts) || parts.isEmpty()) {
                return UNEXPECTED_RESPONSE_ERROR;
            }

            Object partObj = parts.get(0);
            if (!(partObj instanceof Map<?, ?> partMap)) {
                return UNEXPECTED_RESPONSE_ERROR;
            }

            Object textObj = partMap.get("text");
            if (!(textObj instanceof String text)) {
                return UNEXPECTED_RESPONSE_ERROR;
            }

            return text;
        } catch (Exception e) {
            e.printStackTrace();
            return "Error: The AI Service is currently unavailable. Please try again later.";
        }
    }
}
