package com.example.youeatieat.config.mybatis.converter;

import com.example.youeatieat.common.enumeration.FaqCategory;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class FaqCategoryConverter implements Converter<String, FaqCategory> {

    @Override
    public FaqCategory convert(String source) {
        return FaqCategory.getFaqStatusFromValue(source);
    }
}
