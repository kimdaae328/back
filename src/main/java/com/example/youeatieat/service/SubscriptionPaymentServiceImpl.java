package com.example.youeatieat.service;

import com.example.youeatieat.domain.SubscriptionPaymentVO;
import com.example.youeatieat.dto.SubscriptionPaymentDTO;
import com.example.youeatieat.enumeration.PaymentStatus;
import com.example.youeatieat.repository.MemberDAO;
import com.example.youeatieat.repository.SubscriptionPaymentDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Slf4j
@Service
@RequiredArgsConstructor
@Primary
public class SubscriptionPaymentServiceImpl implements SubscriptionPaymentService {
        private final SubscriptionPaymentDAO subscriptionPaymentDAO;
        private final MemberDAO memberDAO;

    @Override
    public void addSubscriptionPayment(SubscriptionPaymentDTO subscriptionPaymentDTO) {
        subscriptionPaymentDTO.setSubscriptionId(1L);
        subscriptionPaymentDTO.setSubscriptionPaymentStatus(PaymentStatus.SUCCESS);
        subscriptionPaymentDTO.setSubscriptionPaymentDate(LocalDateTime.now());
        SubscriptionPaymentVO vo = toSubscriptionPaymentVO(subscriptionPaymentDTO);
        subscriptionPaymentDAO.save(vo);
        Long memberId =subscriptionPaymentDTO.getMemberId();

        memberDAO.updateMemberVerified(memberId);


    }
}
