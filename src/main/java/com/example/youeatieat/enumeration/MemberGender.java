package com.example.youeatieat.enumeration;


import java.util.Arrays;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

public enum MemberGender {
    MALE("male"), FEMALE("female"), NOT("not");

    private final String value;
    private static final Map<String, MemberGender> MEMBER_GENDER_MAP =
            Arrays.stream(MemberGender.values())
                    .collect(Collectors.toMap(MemberGender::getValue, Function.identity()));

    MemberGender(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public static MemberGender getMemberGenderFromValue(String value) {
        return Optional.ofNullable(MEMBER_GENDER_MAP.get(value)).orElseThrow(IllegalArgumentException::new);
    }
}
