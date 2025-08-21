package com.example.youeatieat.enumeration;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import java.util.Arrays;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

public enum PaymentStatus {
    SUCCESS("success"), FAILED("failed"), REFUNDED("refunded");

    private final String value;
    private static final Map<String, PaymentStatus> PAYMENT_PAYMENT_STATUS_MAP =
            Arrays.stream(PaymentStatus.values())
                    .collect(Collectors.toMap(PaymentStatus::getValue, Function.identity()));

    PaymentStatus(String value) {
        this.value = value;
    }
    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static PaymentStatus getPaymentStatusFromValue(String value) {
        return Optional.ofNullable(PAYMENT_PAYMENT_STATUS_MAP.get(value)).orElseThrow(IllegalArgumentException::new);
    }
}
