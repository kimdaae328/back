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
public class ReviewImageDTO {
    private Long id;
    private String reviewImageUrl;
    private int reviewImageSortOrder;
    private Long reviewId;
    private Status reviewImageStatus;
    private String createdDate;
    private String updatedDate;
}
