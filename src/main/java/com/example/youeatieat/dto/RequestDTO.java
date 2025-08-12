package com.example.youeatieat.dto;

import com.example.youeatieat.common.enumeration.Request;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(of="id")
public class RequestDTO {
    private Long id;
    private int requestAmount;
    private int requestPrice;
    private Request requestStatus;
    private Long memberId;
    private Long groupIndexNumber;
    private Long productId;
}
