package com.example.youeatieat.domain;

import com.example.youeatieat.audit.Period;
import com.example.youeatieat.enumeration.Request;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Getter @ToString
@SuperBuilder
@EqualsAndHashCode(of="id")
public class RequestVO extends Period {
    private Long id;
    private int requestAmount;
    private int requestPrice;
    private Request requestStatus;
    private Long memberId;
    private Long groupIndexNumber;
    private Long productId;
}
