package com.petfriends.core.subscription.repositories;

import com.petfriends.core.subscription.entities.VerificationToken;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VerificationTokenRepository extends MongoRepository<VerificationToken, String> {
}
