package com.example.project.kafka.services;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaService {

    private final KafkaTemplate<String, String> kafkaTemplate;

    public KafkaService(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendMessage(String topic, String message) {
        kafkaTemplate.send(topic, message);
    }

    @KafkaListener(topics = "file-process-topic", groupId = "group_id")
    public void listen(String message) {
        // Process message from Kafka queue
        // For this example, we do nothing special with the message
        System.out.println("Received from Kafka: " + message);
    }
}
