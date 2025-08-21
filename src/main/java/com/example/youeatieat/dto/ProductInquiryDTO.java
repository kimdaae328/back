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
public class ProductInquiryDTO {
    private Long id;
    private String productInquiryTitle;
    private String productInquiryContent;
    private Status productInquiryStatus;
    private Long memberId;
    private String memberName;
    private Long productId;
    private AnswerStatus productInquiryAnswerStatus;
    private String createdDate;
    private String updatedDate;

    public String getStatusLabel() {
        if (productInquiryAnswerStatus == AnswerStatus.WAITING) {
            return "미답변";
        } else if (productInquiryAnswerStatus == AnswerStatus.ANSWERED) {
            return "답변 완료";
        } else {
            return "상태 없음";
        }
    }
}
