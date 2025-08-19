package com.example.youeatieat.dto;

import com.example.youeatieat.enumeration.ProductCategory;
import com.example.youeatieat.enumeration.Status;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter
@ToString @Setter
@EqualsAndHashCode(of = "id")
public class ProductDTO {
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
    private String createdDatetime;
    private String updatedDatetime;
}
