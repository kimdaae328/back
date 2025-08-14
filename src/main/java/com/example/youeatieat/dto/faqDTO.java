package com.example.youeatieat.dto;

import com.example.youeatieat.common.enumeration.FaqCategory;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter
@ToString @Setter
@EqualsAndHashCode(of = "id")
public class faqDTO {
    private Long id;
    private FaqCategory faq_category;
    private String faq_title;
    private String faq_content;
    private String createdDatetime;
    private String updatedDatetime;
}
