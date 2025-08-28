package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.SubscriptionPaymentVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SubscriptionPaymentMapper {
    public void insertSubscriptionPayment (SubscriptionPaymentVO subscriptionPaymentVO);
}
