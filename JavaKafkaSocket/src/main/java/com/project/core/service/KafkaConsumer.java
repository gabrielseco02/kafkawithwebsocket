package com.project.core.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@Service
public class KafkaConsumer {
    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @KafkaListener(topics = "file-process-topic", groupId = "api8080_group")
    public void listen(String message) {
        ScheduledExecutorService executorService = Executors.newSingleThreadScheduledExecutor();
        executorService.schedule(() -> {
            messagingTemplate.convertAndSend("/topic/notifications" + "12356", message);
        }, 10, TimeUnit.SECONDS);
    }
}