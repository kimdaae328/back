package com.example.youeatieat.dto;

import com.example.youeatieat.enumeration.FaqCategory;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;


@Component
@Getter
@ToString @Setter
@EqualsAndHashCode(of = "id")
public class InquiryWithAnswerDTO {
    private Long id;
    private FaqCategory inquiryCategory;
    private String inquiryTitle;
    private String inquiryContent;
    private String inquiryImage;
    private Long memberId;
    private String inquiryCreatedDate;
    private String inquiryUpdatedDate;
    private String memberName;
    private Long inquiryId;
    private String inquiryAnswerContent;
    private String answerCreatedDate;
    private String answerUpdatedDate;
}
