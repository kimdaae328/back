package com.example.youeatieat.DTO;

import com.example.youeatieat.common.enumeration.Status;
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
public class faqDTO {
    private Long id;
    private FaqCategory faq_category;
    private String faq_title;
    private String faq_content;
    private String createdDatetime;
    private String updatedDatetime;
}
