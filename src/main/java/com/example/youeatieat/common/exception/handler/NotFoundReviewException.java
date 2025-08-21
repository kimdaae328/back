package com.example.youeatieat.common.exception.handler;

public class NotFoundReviewException extends RuntimeException {
    public NotFoundReviewException() {;}
    public NotFoundReviewException(String message) {
        super(message);
    }
}
