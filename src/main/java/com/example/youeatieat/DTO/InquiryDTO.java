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
public class InquiryDTO {
    private Long id;
    private FaqCategory inquiryCategory;
    private String inquiryTitle;
    private String inquiryContent;
    private String inquiryImage;
    private Long memberId;
    private String createdDatetime;
    private String updatedDatetime;
}
