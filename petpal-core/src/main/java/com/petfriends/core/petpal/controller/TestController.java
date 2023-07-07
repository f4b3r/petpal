package com.petfriends.core.petpal.controller;

import com.petfriends.core.petpal.exceptions.NoSuchElementFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping("/messages/{id}")
    public ResponseEntity<String> getMessage(@PathVariable Integer id) throws NoSuchElementFoundException {
            if(id == 0) throw new NoSuchElementFoundException();
        return
                ResponseEntity.ok("id = {}, id");
    }


}
