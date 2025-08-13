package com.example.youeatieat.DTO;

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
public class InquiryAnswerDTO {
    private Long id;
    private String inquiryAnswerContent;
    private Long inquiryId;
    private String createdDatetime;
    private String updatedDatetime;
}
