package com.example.youeatieat.dto;

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
    private String productTitleImageUrl;
    private String productInfoImageUrl;
    private Integer productMinNumber;
    private Status productStatus;
    private String createdDate;
    private String updatedDate;
    private Long mainCategoryId;
    private String[] mainCategoryNames;
    private Long subCategoryId;
    private String subCategoryName;
    private boolean likeStatus;
    private Long memberId;
    private int likeCount;
}
