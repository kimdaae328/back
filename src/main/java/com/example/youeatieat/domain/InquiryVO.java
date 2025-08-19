package com.example.youeatieat.domain;

import com.example.youeatieat.audit.Period;
import com.example.youeatieat.enumeration.FaqCategory;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;


@Getter @ToString(callSuper = true)
@SuperBuilder
@EqualsAndHashCode(of="id")
public class InquiryVO extends Period {
    private Long id;
    private FaqCategory inquiryCategory;
    private String inquiryTitle;
    private String inquiryContent;
    private String inquiryImage;
    private Long memberId;
}
