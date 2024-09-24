package com.xpinnovators.backend.groq.controller;

import com.xpinnovators.backend.groq.service.GroqService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/agent")
public class GroqController {

    private final GroqService groqAIService;

    public GroqController(GroqService groqAIService) {
        this.groqAIService = groqAIService;
    }

    @PostMapping("/query")
    public ResponseEntity<String> queryGroqAgent(@RequestBody Map<String, String> request) {
        String input = request.get("input");
        String response = groqAIService.queryGroqAI(input);
        return ResponseEntity.ok(response);
    }
}