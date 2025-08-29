package com.example.youeatieat.dto;

import com.example.youeatieat.enumeration.Request;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(of="id")
public class RequestWithPaymentDTO {
    private Long id;
    private int requestAmount;
    private int requestPrice;
    private Long productId;
    private String productName;
    private String productTitleImageUrl;
    private Request requestStatus;
    private Long memberId;
    private String memberName;
    private Long groupIndexNumber;
    private String createdDatetime;
    private String updatedDatetime;

    private String paymentMethod;
    private String paymentDate;
    private String paymentStatus;
    private Long requestId;
    private String createdDate;
    private String updatedDate;
}
