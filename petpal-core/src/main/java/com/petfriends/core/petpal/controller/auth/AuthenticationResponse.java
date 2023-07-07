package com.petfriends.core.petpal.controller.auth;

import com.petfriends.core.petpal.model.auth.AuthUser;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

    private String token;
    private AuthUser user;
}
