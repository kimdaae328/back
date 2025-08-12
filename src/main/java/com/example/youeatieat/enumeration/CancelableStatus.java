package com.example.youeatieat.enumeration;

import java.util.Arrays;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

public enum CancelableStatus {
    ABLE("able"),
    UNABLE("unable");

    private String value;
    private static final Map<String, CancelableStatus> MAP = Arrays.stream(CancelableStatus.values()).collect(Collectors.toMap(CancelableStatus::getValue, Function.identity()));

    CancelableStatus(String value) {
        this.value = value;
    }

    public String getValue() { // 값 꺼내는 메서드
        return value;
    }

    public static CancelableStatus getCancelableStatusFromValue(String value) {
        return Optional.ofNullable(MAP.get(value)).orElseThrow(IllegalStateException::new);
    }
}
