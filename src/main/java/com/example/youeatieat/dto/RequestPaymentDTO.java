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
    private PaymentStatus paymentStatus;
    private Long memberId;
    private Long requestId;
    private String createdDatetime;
    private String updatedDatetime;
}
