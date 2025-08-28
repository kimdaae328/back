package com.example.youeatieat.enumeration;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import java.util.Arrays;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

public enum BannerStatus {
    MAIN("main"), SUB("sub");

    private final String value;
    private static final Map<String, BannerStatus> BANNER_STATUS_MAP =
            Arrays.stream(BannerStatus.values())
                    .collect(Collectors.toMap(BannerStatus::getValue, Function.identity()));

    BannerStatus(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static BannerStatus getBannerStatusFromValue(String value) {
        return Optional.ofNullable(BANNER_STATUS_MAP.get(value)).orElseThrow(IllegalArgumentException::new);
    }
}
