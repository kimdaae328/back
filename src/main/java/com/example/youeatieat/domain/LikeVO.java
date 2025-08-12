package com.example.youeatieat.domain;

import com.example.youeatieat.audit.Period;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Getter @ToString(callSuper = true)
@SuperBuilder
@EqualsAndHashCode(of="id")
public class LikeVO extends Period {
    private Long id;
    private Long productId;
    private Long memberId;
}
