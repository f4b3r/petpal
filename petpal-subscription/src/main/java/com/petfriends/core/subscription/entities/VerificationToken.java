package com.petfriends.core.subscription.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document("verificationtoken")
public class VerificationToken {

    private static final int EXPIRATION = 60 * 24;

    @Id
    @Field("id")
    private String id; // Use String type for id and annotate with @Field("id")

    private String token;

    private String user;

    private Date expiration;
}