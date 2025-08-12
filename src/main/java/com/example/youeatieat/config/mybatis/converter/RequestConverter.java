package com.example.youeatieat.config.mybatis.converter;

import com.example.youeatieat.common.enumeration.Request;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class RequestConverter implements Converter<String, Request> {
    @Override
    public Request convert(String source) {
        return null;
    }
}
