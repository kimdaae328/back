package com.example.youeatieat.domain;

import com.example.youeatieat.enumeration.Category;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Getter
@ToString(callSuper = true)
@SuperBuilder
@EqualsAndHashCode(of="id")
public class ProductVO extends Period{

    private Long id;
    private String ProductName;
    private int ProductPrice;
    private String ProductQuantity;
    private Category ProductCategory;
    private String productTitleImageUrl;
    private String productInfoImageUrl;
    private int productMinNumber;
    private Status productStatus;
    private Long memberId;


}
