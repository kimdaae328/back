package com.example.youeatieat.config.mybatis.converter;

import com.example.youeatieat.enumeration.DeliveryStatus;
import com.example.youeatieat.enumeration.ProductCategory;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class DeliveryStatusConverter implements Converter<String, DeliveryStatus> {

    @Override
    public DeliveryStatus convert(String source) {
        return DeliveryStatus.getDeliveryStatusFromValue(source);
    }
}
