package com.example.youeatieat.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@Getter
@Setter
@ToString
public class MainPackDealDTO {
    private Long id;
    private String productName;
    private Integer productPrice;
    private String productQuantity;
    private String productCategory;
    private String productTitleImageUrl;
    private String productInfoImageUrl;
    private Integer productMinNumber;
    private String productStatus;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    private Integer cartCount;
}
