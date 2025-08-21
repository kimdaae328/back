package com.example.youeatieat.dto;

import com.example.youeatieat.util.Criteria;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.apache.ibatis.javassist.compiler.ast.Keyword;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter @Setter @ToString
public class AdminCustomerCriteriaDTO {
    private List<MemberDTO> customers;
    private String keyword;
    private Criteria criteria;
}
