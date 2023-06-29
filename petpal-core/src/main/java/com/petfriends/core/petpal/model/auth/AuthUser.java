package com.petfriends.core.petpal.model.auth;

import com.petfriends.core.petpal.utils.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthUser {

    private String name;
    private String surname;
    private String email;
    private Role role;
}
