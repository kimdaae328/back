package com.example.youeatieat.enumeration;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import java.util.Arrays;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

public enum AnswerStatus {
    WAITING("waiting"), ANSWERED("answered");

    private final String value;
    private static final Map<String, AnswerStatus> ANSWER_STATUS_MAP =
            Arrays.stream(AnswerStatus.values())
                    .collect(Collectors.toMap(AnswerStatus::getValue, Function.identity()));

    AnswerStatus(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static AnswerStatus getAnsweredStatusFromValue(String value) {
        return Optional.ofNullable(ANSWER_STATUS_MAP.get(value)).orElseThrow(IllegalArgumentException::new);
    }
}
