package com.petfriends.core.petpal.services;

import com.petfriends.core.petpal.config.JwtService;
import com.petfriends.core.petpal.controller.auth.RegisterRequest;
import com.petfriends.core.petpal.entities.User;
import com.petfriends.core.petpal.exceptions.EmailRegisteredException;
import com.petfriends.core.petpal.exceptions.ExceptionHandlerAdvice;
import com.petfriends.core.petpal.model.Result;
import com.petfriends.core.petpal.repositories.UserRepository;
import com.petfriends.core.petpal.service.AuthenticationService;
import com.petfriends.core.petpal.utils.StatusCode;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class AuthenticationServiceTest {


    @Mock
    private UserRepository repository;
    @Mock
    private JwtService jwtService;

    @InjectMocks
    private AuthenticationService authenticationService;

    @Test
    public void testRegister_EmailAlreadyExists() {
        // Prepare test data
        RegisterRequest request = new RegisterRequest();
        request.setFirstname("John");
        request.setLastname("Doe");
        request.setEmail("john.doe@example.com");
        request.setPassword("password123");

        // Set up mock behavior
        when(repository.findByEmail(request.getEmail())).thenReturn(Optional.of(new User()));

        // Perform the test
        assertThrows(EmailRegisteredException.class, () -> authenticationService.register(request));

        // Verify method invocations and assertions
        verify(repository).findByEmail(request.getEmail());
        verify(repository, never()).save(any());
        verify(jwtService, never()).generateToken(any());

    }

}
