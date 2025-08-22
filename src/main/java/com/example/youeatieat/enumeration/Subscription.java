package com.example.youeatieat.enumeration;


import java.util.Arrays;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

public enum Subscription {
    ACTIVE("active"), CANCELLED("cancelled");

    private final String value;
    private static final Map<String, Subscription> STATUS_MAP =
            Arrays.stream(Subscription.values())
                    .collect(Collectors.toMap(Subscription::getValue, Function.identity()));

    Subscription(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public static Subscription getSubscriptionFromValue(String value) {
        return Optional.ofNullable(STATUS_MAP.get(value)).orElseThrow(IllegalArgumentException::new);
    }
}
