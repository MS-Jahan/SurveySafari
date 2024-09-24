package com.xpinnovators.backend.groq.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class GroqService {

    private final RestTemplate restTemplate;

    @Value("${groq.api.url}")
    private String apiUrl;

    @Value("${groq.api.key}")
    private String apiKey;

    public GroqService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public String queryGroqAI(String input) {
        // Set the headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + apiKey);

        // Create request body
        Map<String, Object> message = new HashMap<>();
        message.put("role", "user");
        message.put("content", input);

        Map<String, Object> body = new HashMap<>();
        body.put("messages", new Map[] { message });
        body.put("model", "llama3-8b-8192"); // You can change this if needed

        // Wrap the body and headers in an HttpEntity
        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);

        // Send the request
        ResponseEntity<String> response = restTemplate.postForEntity(apiUrl, entity, String.class);

        // Handle response
        if (response.getStatusCode() == HttpStatus.OK) {
            return response.getBody();  // Return the response body (which should contain the answer)
        } else {
            throw new RuntimeException("Failed to query Groq AI: " + response.getStatusCode());
        }
    }
}
