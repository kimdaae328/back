package com.example.youeatieat.DTO;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter
@ToString @Setter
@EqualsAndHashCode(of = "id")
public class CommissionDTO {
    private Long id;
    private int commissionRate;
    private int commission_price;
    private Long requestId;
    private String createdDatetime;
    private String updatedDatetime;
}
