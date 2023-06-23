package com.petfriends.core.petpal.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/v1/demo-controller")
public class TestController {


        @GetMapping("/messages")
        public ResponseEntity<String> getMessage() {
            return
                    ResponseEntity.ok("Hello from Docker!");
        }

}
