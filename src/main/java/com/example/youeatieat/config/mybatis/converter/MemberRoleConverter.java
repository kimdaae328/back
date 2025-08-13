package com.example.youeatieat.config.mybatis.converter;

import com.example.youeatieat.enumeration.MemberRole;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class MemberRoleConverter implements Converter<String, MemberRole> {
    @Override
    public MemberRole convert(String source) {
        return null;
    }
}
