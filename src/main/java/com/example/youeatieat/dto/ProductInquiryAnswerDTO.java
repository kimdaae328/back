package com.example.youeatieat.dto;


import com.example.youeatieat.enumeration.AnswerStatus;
import com.example.youeatieat.enumeration.Status;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter
@ToString
@Setter
@EqualsAndHashCode(of = "id")
public class ProductInquiryAnswerDTO {
    private Long id;
    private String productInquiryAnswerContent;
    private Status productInquiryStatus;
    private Long productInquiryId;
    private String createdDate;
    private String updatedDate;
}
