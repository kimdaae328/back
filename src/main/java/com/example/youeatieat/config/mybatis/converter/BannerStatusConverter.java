package com.example.youeatieat.config.mybatis.converter;

import com.example.youeatieat.enumeration.AnswerStatus;
import com.example.youeatieat.enumeration.BannerStatus;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class BannerStatusConverter implements Converter<String, BannerStatus> {
    @Override
    public BannerStatus convert(String source) {
        return BannerStatus.getBannerStatusFromValue(source);
    }
}
