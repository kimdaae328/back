package com.example.youeatieat.dto;

import com.example.youeatieat.enumeration.PaymentStatus;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(of="id")
public class RequestPaymentDTO {
    private Long id;
    private String paymentMethod;
    private String paymentDate;
    private String paymentStatus;
    private Long memberId;
    private Long requestId;
    private String createdDate;
    private String updatedDate;
    private String productId;
    private String productName;
    private int requestPrice;
}
