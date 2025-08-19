package com.example.youeatieat.enumeration;

import java.util.Arrays;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

public enum MemberRole {
    BUYER("buyer"), SELLER("seller"), ADMIN("admin");

    private final String value;
    private static final Map<String, Provider> STATUS_MAP =
            Arrays.stream(Provider.values())
                    .collect(Collectors.toMap(Provider::getValue, Function.identity()));

    MemberRole(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public static Provider getMemberRoleFromValue(String value) {
        return Optional.ofNullable(STATUS_MAP.get(value)).orElseThrow(IllegalArgumentException::new);
    }
}
