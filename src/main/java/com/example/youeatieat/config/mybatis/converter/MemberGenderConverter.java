package com.example.youeatieat.config.mybatis.converter;

import com.example.youeatieat.common.enumeration.MemberGender;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class MemberGenderConverter implements Converter<String, MemberGender> {
    @Override
    public MemberGender convert(String source) {
        return null;
    }
}
