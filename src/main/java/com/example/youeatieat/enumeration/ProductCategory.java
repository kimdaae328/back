package com.example.youeatieat.enumeration;

import jdk.jfr.Category;

import java.util.Arrays;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

public enum ProductCategory {
    VEGETABLES("vegetables"),
    FRUITS("fruits"),
    FISHERIES("fisheries"),
    BUTCHERS("butchers"),
    ETC("etc");

    private String value;
    private static final Map<String, ProductCategory> MAP = Arrays.stream(ProductCategory.values()).collect(Collectors.toMap(ProductCategory::getValue, Function.identity()));

    ProductCategory(String value) {
        this.value = value;
    }

    public String getValue() { // 값 꺼내는 메서드
        return value;
    }

    public static ProductCategory getProductStatusFromValue(String value) {
        return Optional.ofNullable(MAP.get(value)).orElseThrow(IllegalStateException::new);
    }
}
