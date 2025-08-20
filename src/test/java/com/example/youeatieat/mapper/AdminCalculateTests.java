package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.PaymentCalculateDTO;
import com.example.youeatieat.repository.AdminCustomerDAO;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Slf4j
public class AdminCalculateTests {

    @Autowired
    private AdminCustomerMapper adminCustomerMapper;

    @Test
    void testPaymentCalc() {
        Long memberId = 54L;

        PaymentCalculateDTO result = adminCustomerMapper.selectPaymentCalculate(54L);

        if (result == null) {
            log.info("-------------memberId={} 의 결제 없당", memberId);
            return;
        }

        log.info("최근 결제일 = {}", result.getLastPaymentDate());
        log.info("총 결제금액 = {}", result.getTotalPrice());
        log.info("총 주문수 = {}", result.getTotalOrders());
    }

}
