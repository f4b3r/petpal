package com.petfriends.core.petpal.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class OnRegistrationEvent {
    private String email;
    private String locale;
    private String confirmationUrl;
}
