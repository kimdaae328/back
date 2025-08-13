package com.example.youeatieat.dto;

import com.example.youeatieat.common.enumeration.PaymentStatus;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(of="id")
public class SubscriptionPaymentDTO {
    private Long id;
    private int subscriptionPaymentPrice;
    private Long memberId;
    private Long subscriptionId;
    private String subscriptionPaymentDate;
    private PaymentStatus subscriptionPaymentStatus;
    private String subscriptionPaymentMethod;
    private String createdDatetime;
    private String updatedDatetime;
}
