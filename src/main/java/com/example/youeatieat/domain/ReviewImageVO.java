package com.example.youeatieat.domain;

import com.example.youeatieat.audit.Period;
import com.example.youeatieat.enumeration.Status;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Getter @ToString(callSuper = true)
@SuperBuilder
@EqualsAndHashCode(of="id")
public class ReviewImageVO extends Period {
    private Long id;
    private String reviewImageUrl;
    private int reviewImageSortOrder;
    private Long reviewId;
    private Status reviewImageStatus;
}
