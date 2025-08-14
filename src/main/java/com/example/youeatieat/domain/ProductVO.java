package com.example.youeatieat.domain;

import com.example.youeatieat.audit.Period;
import com.example.youeatieat.common.enumeration.Status;
import com.example.youeatieat.enumeration.ProductCategory;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;


@Getter @ToString(callSuper = true)
@SuperBuilder
@EqualsAndHashCode(of="id")
public class ProductVO extends Period {
    private Long id;
    private String productName;
    private Integer productPrice;
    private String productQuantity;
    private ProductCategory productCategory;
    private String productTitleImageUrl;
    private String productInfoImageUrl;
    private Integer productMinNumber;
    private Status productStatus;
    private Long memberId;
}
