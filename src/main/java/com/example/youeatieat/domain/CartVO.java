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
public class CartVO extends Period {
    private Long id;
    private Status cartStatus;
    private int cartCount;
    private Long productId;
    private Long memberId;
    private String productName;
    private int productPrice;
}
