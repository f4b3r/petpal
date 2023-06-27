package com.petfriends.core.petpal.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class EmailRegisteredException extends RuntimeException {
    public EmailRegisteredException() {
    }

    public EmailRegisteredException(String message) {
        super(message);
    }
}
