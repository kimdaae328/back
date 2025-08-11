package com.example.youeatieat.enumeration;

public enum Category {
    VEGETABLES("vegetables"),
    FRUITS("fruits"),
    FISHERIES("fisheries"),
    BUTCHERS("butchers"),
    ETC("etc");

    private final String value; // 값을 저장할 필드

    // 생성자 (private 또는 default)
    Category(String value) {
        this.value = value;
    }

    public String getValue() { // 값 꺼내는 메서드
        return value;
    }
}
