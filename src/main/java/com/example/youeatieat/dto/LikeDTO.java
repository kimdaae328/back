package com.example.youeatieat.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(of="id")
public class LikeDTO {
    private Long id;
    private Long productId;
    private Long memberId;
    private int productPrice;
    private String productName;
    private String productTitleImageUrl;
    private boolean likeStatus;
    private String createdDate;
    private String updatedDate;
}
