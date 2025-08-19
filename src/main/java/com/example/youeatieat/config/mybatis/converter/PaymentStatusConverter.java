package com.example.youeatieat.config.mybatis.converter;

import com.example.youeatieat.enumeration.PaymentStatus;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class PaymentStatusConverter implements Converter<String, PaymentStatus> {
    @Override
    public PaymentStatus convert(String source) {
        return null;
    }
}
