package com.example.youeatieat.domain;

import com.example.youeatieat.audit.Period;
import com.example.youeatieat.common.enumeration.Status;
import com.example.youeatieat.enumeration.DeliveryStatus;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;


@Getter @ToString(callSuper = true)
@SuperBuilder
@EqualsAndHashCode(of="id")
public class DeliveryVO extends Period {
    private Long id;
    private DeliveryStatus deliveryStatus;
    private int deliveryCount;
    private Long productId;
    private Long requestId;
}
