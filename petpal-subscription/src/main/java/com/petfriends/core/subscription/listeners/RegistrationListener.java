package com.petfriends.core.subscription.listeners;

import com.petfriends.core.subscription.model.OnRegistrationEventCons;
import com.petfriends.core.subscription.service.RegistrationService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class RegistrationListener {

    private static final Logger logger = LoggerFactory.getLogger(RegistrationListener.class);
    private final RegistrationService registrationService;
    @KafkaListener(topics = "ON_REGISTRATION_COMPLETE", groupId = "SUB_GR_1")
    public void listenWithHeaders(
            @Payload OnRegistrationEventCons message) {
        logger.info("Received Message: " + message);

        registrationService.confirmRegistration(message);
        //TODO handle exceptions
    }
}
