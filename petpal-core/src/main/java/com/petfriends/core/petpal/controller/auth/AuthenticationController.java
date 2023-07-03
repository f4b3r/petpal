package com.petfriends.core.petpal.controller.auth;

import com.petfriends.core.petpal.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;
    private final KafkaTemplate<String,String> kafkaTemplate;
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ){

        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ){
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @GetMapping("/testkafka")
    public ResponseEntity<String> testy(
            @RequestBody RegisterRequest request
    ){
        kafkaTemplate.send("ON_REGISTRATION_COMPLETE","CIAO");
                return ResponseEntity.ok("HELLO");
    }

}
