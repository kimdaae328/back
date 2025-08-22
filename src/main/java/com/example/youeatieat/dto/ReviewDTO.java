package com.example.youeatieat.dto;

import com.example.youeatieat.enumeration.Status;
import com.example.youeatieat.enumeration.Subscription;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

import java.util.List;

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
    private Subscription subscriptionStatus;
    private String createdDate;
    private String updatedDate;
    private List<ReviewImageDTO> images;
}
