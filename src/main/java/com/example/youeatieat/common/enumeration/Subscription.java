package com.example.youeatieat.common.enumeration;

import java.util.Arrays;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

public enum Subscription {
    ACTIVE("active"), CANCELLED("cancelled");

    private final String value;
    private static final Map<String, Provider> STATUS_MAP =
            Arrays.stream(Provider.values())
                    .collect(Collectors.toMap(Provider::getValue, Function.identity()));

    Subscription(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public static Provider getSubscriptionFromValue(String value) {
        return Optional.ofNullable(STATUS_MAP.get(value)).orElseThrow(IllegalArgumentException::new);
    }
}
