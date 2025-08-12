package com.example.youeatieat.dto;

import com.example.youeatieat.common.enumeration.Subscription;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(of="id")
public class SubscriptionDTO {
    private Long id;
    private String subscriptionStartDate;
    private String subscriptionEndDate;
    private Subscription subscriptionStatus;
    private String createdDatetime;
    private String updatedDatetime;
}
