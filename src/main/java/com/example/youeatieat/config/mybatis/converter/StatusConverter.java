package com.example.youeatieat.config.mybatis.converter;

import com.example.youeatieat.enumeration.Status;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class StatusConverter implements Converter<String, Status> {
    @Override
    public Status convert(String source) {
        return Status.getStatusFromValue(source);
    }
}
