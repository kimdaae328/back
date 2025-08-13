package com.example.youeatieat.domain;

import com.example.youeatieat.audit.Period;
import com.example.youeatieat.enumeration.Subscription;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Getter @ToString(callSuper = true)
@SuperBuilder
@EqualsAndHashCode(of="id")
public class SubscriptionVO extends Period {
    private Long id;
    private String subscriptionStartDate;
    private String subscriptionEndDate;
    private Subscription subscriptionStatus;
}
