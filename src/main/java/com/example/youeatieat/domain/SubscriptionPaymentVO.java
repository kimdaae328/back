package com.example.youeatieat.domain;

import com.example.youeatieat.audit.Period;
import com.example.youeatieat.enumeration.PaymentStatus;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

import java.time.LocalDateTime;

@Getter @ToString(callSuper = true)
@SuperBuilder
@EqualsAndHashCode(of="id")
public class SubscriptionPaymentVO extends Period {
    private Long id;
    private int subscriptionPaymentPrice;
    private Long memberId;
    private Long subscriptionId;
    private LocalDateTime subscriptionPaymentDate;
    private PaymentStatus subscriptionPaymentStatus;
    private String subscriptionPaymentMethod;
}
