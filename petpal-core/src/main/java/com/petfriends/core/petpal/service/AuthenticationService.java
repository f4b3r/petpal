package com.petfriends.core.petpal.service;

import com.petfriends.core.petpal.config.JwtService;
import com.petfriends.core.petpal.controller.auth.AuthenticationRequest;
import com.petfriends.core.petpal.controller.auth.AuthenticationResponse;
import com.petfriends.core.petpal.controller.auth.RegisterRequest;
import com.petfriends.core.petpal.entities.User;
import com.petfriends.core.petpal.exceptions.EmailRegisteredException;
import com.petfriends.core.petpal.model.OnRegistrationEvent;
import com.petfriends.core.petpal.model.auth.AuthUser;
import com.petfriends.core.petpal.repositories.UserRepository;
import com.petfriends.core.petpal.utils.Role;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final KafkaTemplate<String,OnRegistrationEvent> kafkaTemplate;
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken).user(new AuthUser(user.getFirstName(), user.getLastName(),user.getEmail(), user.getRoles()))
                .build();
    }

    public AuthenticationResponse register(RegisterRequest request, HttpServletRequest servletReq) {
        var userExist = repository.findByEmail(request.getEmail()).isPresent();

        if (userExist) {
            throw new EmailRegisteredException(request.getEmail());
        }

        var user = User.builder()
                .firstName(request.getFirstname())
                .lastName(request.getLastname())
                .email(request.getEmail())
                .isEnabled(false)
                .password(passwordEncoder.encode(request.getPassword()))
                .roles(List.of(Role.USER))
                .build();
        repository.save(user);
        OnRegistrationEvent event = OnRegistrationEvent.builder()
                .confirmationUrl(servletReq.getContextPath())
                .email(request.getEmail())
                .user_id(user.getId())
                .locale(servletReq.getLocale().toString())
                .build();
        kafkaTemplate.send("ON_REGISTRATION_COMPLETE",event);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

}
