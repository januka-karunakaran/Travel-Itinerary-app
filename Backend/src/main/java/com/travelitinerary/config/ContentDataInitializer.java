package com.travelitinerary.config;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.List;
import java.util.Map;

@Component
public class ContentDataInitializer implements CommandLineRunner {

    private final MongoTemplate mongoTemplate;
    private final ObjectMapper objectMapper;
    private final ResourceLoader resourceLoader;

    public ContentDataInitializer(
        MongoTemplate mongoTemplate,
        ObjectMapper objectMapper,
        ResourceLoader resourceLoader
    ) {
        this.mongoTemplate = mongoTemplate;
        this.objectMapper = objectMapper;
        this.resourceLoader = resourceLoader;
    }

    @Override
    public void run(String... args) throws Exception {
        seedCollection("districts", "data/districts.json");
        seedCollection("itineraryPlans", "data/itineraryPlans.json");
        seedCollection("tourGuides", "data/tourGuides.json");
    }

    private void seedCollection(String collectionName, String classpathFile) throws Exception {
        long existingCount = mongoTemplate.count(new Query(), collectionName);
        if (existingCount > 0) {
            return;
        }

        Resource resource = resourceLoader.getResource("classpath:" + classpathFile);
        try (InputStream inputStream = resource.getInputStream()) {
            List<Map<String, Object>> items = objectMapper.readValue(
                inputStream,
                new TypeReference<List<Map<String, Object>>>() {}
            );
            if (items != null && !items.isEmpty()) {
                mongoTemplate.insert(items, collectionName);
            }
        }
    }
}
