package com.example.youeatieat.domain;

import com.example.youeatieat.audit.Period;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;


@Getter @ToString
@SuperBuilder
@EqualsAndHashCode(of="id")
public class GroupIndexVO extends Period{
    private Long id;
    private Long groupIndexNumber;
    private Long productId;
}
