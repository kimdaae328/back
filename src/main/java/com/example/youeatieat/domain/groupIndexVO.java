package com.example.youeatieat.domain;

import com.example.youeatieat.audit.Period;
import com.example.youeatieat.enumeration.CancelableStatus;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;


@Getter @ToString
@SuperBuilder
@EqualsAndHashCode(of="id")
public class groupIndexVO{
    private Long id;
    private Long groupIndexNumber;
    private Long productId;
}
