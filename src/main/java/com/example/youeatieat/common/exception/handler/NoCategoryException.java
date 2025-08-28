package com.example.youeatieat.common.exception.handler;

public class NoCategoryException extends RuntimeException {
    public NoCategoryException() {;}
    public NoCategoryException(String message) {
        super(message);
    }
}
