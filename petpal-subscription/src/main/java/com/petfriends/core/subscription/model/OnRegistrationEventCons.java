package com.petfriends.core.subscription.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OnRegistrationEventCons {
    private String email;
    private String locale;
    private String confirmationUrl;
    private String user_id;
}
