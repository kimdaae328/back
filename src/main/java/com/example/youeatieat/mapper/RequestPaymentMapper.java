package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.RequestPaymentVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RequestPaymentMapper {
    public void insertRequestPayment(RequestPaymentVO requestPaymentVO);

    ;
}
