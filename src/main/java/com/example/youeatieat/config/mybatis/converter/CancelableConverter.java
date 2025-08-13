package com.example.youeatieat.config.mybatis.converter;

import com.example.youeatieat.enumeration.CancelableStatus;
import com.example.youeatieat.enumeration.DeliveryStatus;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class CancelableConverter implements Converter<String, CancelableStatus> {

    @Override
    public CancelableStatus convert(String source) {
        return CancelableStatus.getCancelableStatusFromValue(source);
    }
}
