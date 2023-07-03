package com.petfriends.core.subscription.config.listeners;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
public class RegistrationListener {

    private static final Logger logger = LoggerFactory.getLogger(RegistrationListener.class);
    @KafkaListener(topics = "ON_REGISTRATION_COMPLETE", groupId = "SUB_GR_1")
    public void listenWithHeaders(
            @Payload String message) {
        logger.info("Received Message: " + message
                + "from partition: ");
        System.out.println(
                "Received Message: " + message
                        + "from partition: ");
    }
}
