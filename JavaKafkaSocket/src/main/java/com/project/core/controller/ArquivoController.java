package com.project.core.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api")
public class ArquivoController {
    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/novo-arquivo")
    public ResponseEntity<String>  novoArquivo() {
        String response = restTemplate.postForObject("http://localhost:8081/ms-novo-arquivo-kafka", null, String.class);

        if ("Sucesso".equals(response)) {
            return ResponseEntity.ok("Requisição processada com sucesso");
        } else {
            return ResponseEntity.status(500).body("Erro no processamento");
        }
    }
}
