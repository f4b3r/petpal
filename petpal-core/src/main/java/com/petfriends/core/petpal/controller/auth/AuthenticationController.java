package com.petfriends.core.petpal.controller.auth;

import com.petfriends.core.petpal.model.OnRegistrationEvent;
import com.petfriends.core.petpal.service.AuthenticationService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;
    private final KafkaTemplate<String, OnRegistrationEvent> kafkaTemplate;
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request, HttpServletRequest httpServletRequest
    ){

        return ResponseEntity.ok(authenticationService.register(request,httpServletRequest));
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

        kafkaTemplate.send("ON_REGISTRATION_COMPLETE",OnRegistrationEvent.builder().email("pfabri1983@msn.com")
                .locale("locale").user_id("1232").confirmationUrl("URL").build());
                return ResponseEntity.ok("HELLO");
    }

}
