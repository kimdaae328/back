package com.example.youeatieat.enumeration;

import java.util.Arrays;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

public enum DeliveryStatus {
    COMPLETED("completed"),
    WAIT("wait");

    private String value;
    private static final Map<String, DeliveryStatus> MAP = Arrays.stream(DeliveryStatus.values()).collect(Collectors.toMap(DeliveryStatus::getValue, Function.identity()));

    DeliveryStatus(String value) {
        this.value = value;
    }

    public String getValue() { // 값 꺼내는 메서드
        return value;
    }

    public static DeliveryStatus getDeliveryStatusFromValue(String value) {
        return Optional.ofNullable(MAP.get(value)).orElseThrow(IllegalStateException::new);
    }
}
