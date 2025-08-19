package com.example.youeatieat.config.mybatis.converter;

import com.example.youeatieat.enumeration.Provider;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class ProviderConverter implements Converter<String, Provider> {

    @Override
    public Provider convert(String source) {
        return Provider.getProviderFromValue(source);
    }
}
