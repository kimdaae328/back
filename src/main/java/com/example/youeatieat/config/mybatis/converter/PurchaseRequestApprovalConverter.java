package com.example.youeatieat.config.mybatis.converter;

import com.example.youeatieat.common.enumeration.MemberRole;
import com.example.youeatieat.common.enumeration.PurchaseRequestApproval;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class PurchaseRequestApprovalConverter implements Converter<String, PurchaseRequestApproval> {
    @Override
    public PurchaseRequestApproval convert(String source) {
        return null;
    }
}
