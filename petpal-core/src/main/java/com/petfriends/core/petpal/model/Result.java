package com.petfriends.core.petpal.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Result {

    private boolean flag; // Two values: true means success, false means not success

    private Integer code; // Status code. e.g., 200

    private String message; // Response message

    private Object data; // The response payload
}
