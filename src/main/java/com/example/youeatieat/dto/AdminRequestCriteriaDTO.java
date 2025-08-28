package com.example.youeatieat.dto;

import com.example.youeatieat.util.Criteria;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter @Setter @ToString
public class AdminRequestCriteriaDTO {
    private List<RequestWithPaymentDTO> requests;
    private String keyword;
    private Criteria criteria;
}
