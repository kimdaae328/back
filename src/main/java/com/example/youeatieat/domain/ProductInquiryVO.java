package com.example.youeatieat.domain;

import com.example.youeatieat.audit.Period;
import com.example.youeatieat.enumeration.AnswerStatus;
import com.example.youeatieat.enumeration.Status;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Getter
@ToString(callSuper = true)
@SuperBuilder
@EqualsAndHashCode(of="id")
public class ProductInquiryVO extends Period {
    private Long id;
    private String productInquiryTitle;
    private String productInquiryContent;
    private Status productInquiryStatus;
    private Long memberId;
    private Long productId;
    private AnswerStatus productInquiryAnswerStatus;

}
