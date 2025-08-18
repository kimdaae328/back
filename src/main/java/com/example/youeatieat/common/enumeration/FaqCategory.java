package com.example.youeatieat.common.enumeration;

import java.util.Arrays;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

public enum FaqCategory {
    GOODS("goods"),
    SHIPPING("shipping"),
    ECT("ect");

    private String value;
    private static final Map<String, FaqCategory> MAP = Arrays.stream(FaqCategory.values()).collect(Collectors.toMap(FaqCategory::getValue, Function.identity()));

    FaqCategory(String value) {
        this.value = value;
    }

    public String getValue() { // 값 꺼내는 메서드
        return value;
    }

    public static FaqCategory getFaqStatusFromValue(String value) {
        return Optional.ofNullable(MAP.get(value)).orElseThrow(IllegalStateException::new);
    }
}
