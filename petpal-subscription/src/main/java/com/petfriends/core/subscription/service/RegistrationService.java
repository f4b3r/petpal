package com.petfriends.core.subscription.service;

import com.petfriends.core.subscription.entities.VerificationToken;
import com.petfriends.core.subscription.model.OnRegistrationEventCons;
import com.petfriends.core.subscription.repositories.VerificationTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RegistrationService {

    private final VerificationTokenRepository verificationTokenRepository;
    private final JavaMailSender javaMailSender;
    public void confirmRegistration(OnRegistrationEventCons event) throws Exception {
        String token = UUID.randomUUID().toString();

        try {
            verificationTokenRepository.insert(
                    VerificationToken.builder()
                            .token(token)
                            .user(event.getUser_id())
                            .expiration(new Date())
                            .build());
        } catch (Exception ex) {
            // Handle the case when the insertion fails due to a duplicate key (token)
            throw new Exception("Token insertion failed. Token already exists.", ex);
        }


        String recipientAddress = event.getEmail();
        String subject = "Registration Confirmation";
        String confirmationUrl
                = event.getConfirmationUrl() + "/regitrationConfirm?token=" + token;
       // String message = messages.getMessage("message.regSucc", null, event.getLocale());
        String message = "HELLO USER";
        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo(recipientAddress);
        email.setSubject(subject);
        email.setText(message + "\r\n" + "http://localhost:8080" + confirmationUrl);
        javaMailSender.send(email);
    }
}
