package com.example.youeatieat.service;

import com.example.youeatieat.domain.SubscriptionPaymentVO;
import com.example.youeatieat.dto.SubscriptionPaymentDTO;

public interface SubscriptionPaymentService {

    public void addSubscriptionPayment(SubscriptionPaymentDTO subscriptionPaymentDTO);

    default SubscriptionPaymentVO toSubscriptionPaymentVO(SubscriptionPaymentDTO subscriptionPaymentDTO){
        return SubscriptionPaymentVO.builder()
                .subscriptionId(subscriptionPaymentDTO.getSubscriptionId())
                .memberId(subscriptionPaymentDTO.getMemberId())
                .subscriptionPaymentMethod(subscriptionPaymentDTO.getSubscriptionPaymentMethod())
                .subscriptionPaymentDate(subscriptionPaymentDTO.getSubscriptionPaymentDate())
                .subscriptionPaymentPrice(subscriptionPaymentDTO.getSubscriptionPaymentPrice())
                .subscriptionPaymentStatus(subscriptionPaymentDTO.getSubscriptionPaymentStatus())
                .build();
    }
}
