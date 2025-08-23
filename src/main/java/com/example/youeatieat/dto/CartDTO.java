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
public class CartDTO {
    private Long id;
    private Status cartStatus;
    private String productName;
    private int cartCount;
    private Long productId;
    private int productPrice;
    private Long memberId;
    private String createdDatetime;
    private String updatedDatetime;
}
