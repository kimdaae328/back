package com.example.youeatieat.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(of="id")
public class PaymentItemDTO {
    private Long id;
    private String paymentMethod;
    private String paymentDate;
    private String paymentStatus;
    private Long requestId;
    private String productId;
    private String productName;
    private String requestAmount;
    private int requestPrice;
}
