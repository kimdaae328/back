package com.example.youeatieat.config.mybatis.converter;

import com.example.youeatieat.common.enumeration.Subscription;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class SubscriptionConverter implements Converter<String, Subscription> {
    @Override
    public Subscription convert(String source) {
        return null;
    }
}
