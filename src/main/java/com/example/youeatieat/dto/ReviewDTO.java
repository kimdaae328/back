package com.example.youeatieat.dto;

import com.example.youeatieat.enumeration.Status;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(of="id")
public class ReviewDTO {
    private Long id;
    private String reviewContent;
    private Status reviewStatus;
    private Long memberId;
    private String memberName;
    private Long requestId;
    private Long productId;
    private String reviewImageUrl;
    private Status reviewImageStatus;
    private String createdDate;
    private String updatedDate;
}
