package com.example.project.kafka.controller;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("/ms-novo-arquivo-kafka")
public class KafkaProcessingController {

    private final KafkaTemplate<String, String> kafkaTemplate;

    public KafkaProcessingController(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    @PostMapping
    public String processFile() {
        CompletableFuture.runAsync(() -> {
            try {
                TimeUnit.SECONDS.sleep(5);
                kafkaTemplate.send("file-process-topic", "Arquivo gerado");
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });

        return "Sucesso";
    }
}
