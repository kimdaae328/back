package com.example.youeatieat.dto;

import com.example.youeatieat.common.enumeration.Status;
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
    private Long requestId;
    private Long productId;
    private String createdDatetime;
    private String updatedDatetime;
}
