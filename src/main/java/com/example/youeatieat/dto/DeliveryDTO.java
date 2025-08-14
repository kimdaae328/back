package com.example.youeatieat.dto;

import com.example.youeatieat.enumeration.DeliveryStatus;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter
@ToString @Setter
@EqualsAndHashCode(of = "id")
public class DeliveryDTO {
    private Long id;
    private DeliveryStatus deliveryStatus;
    private int deliveryCount;
    private Long productId;
    private Long requestId;
    private String createdDatetime;
    private String updatedDatetime;
}
