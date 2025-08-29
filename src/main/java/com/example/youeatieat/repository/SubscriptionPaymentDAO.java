package com.example.youeatieat.repository;

import com.example.youeatieat.domain.SubscriptionPaymentVO;
import com.example.youeatieat.mapper.SubscriptionPaymentMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Slf4j
@Repository
@RequiredArgsConstructor
public class SubscriptionPaymentDAO {
    private final SubscriptionPaymentMapper subscriptionPaymentMapper;
    public void save(SubscriptionPaymentVO subscriptionPaymentVO) {
        subscriptionPaymentMapper.insertSubscriptionPayment(subscriptionPaymentVO);
    }

}
