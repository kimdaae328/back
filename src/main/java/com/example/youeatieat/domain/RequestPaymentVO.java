package com.example.youeatieat.domain;

import com.example.youeatieat.common.enumeration.PaymentStatus;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Getter @ToString
@SuperBuilder
@EqualsAndHashCode(of="id")
public class RequestPaymentVO{
    private Long id;
    private String paymentMethod;
    private String paymentDate;
    private PaymentStatus paymentStatus;
    private Long memberId;
    private Long requestId;
}
