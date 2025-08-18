package com.example.youeatieat.common.exception;

import org.springframework.stereotype.Component;

@Component
public class LoginFailException extends RuntimeException {
    public LoginFailException() {}
    LoginFailException(String message) {
        super(message);
    }
}
