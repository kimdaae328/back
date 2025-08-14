package com.example.youeatieat.common.exception;

public class NoProductException extends RuntimeException {
    public NoProductException() {;}
    public NoProductException(String message) {
        super(message);
    }
}
