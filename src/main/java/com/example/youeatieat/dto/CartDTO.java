package com.example.youeatieat.dto;

import com.example.youeatieat.common.enumeration.Status;
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
    private int cartCount;
    private Long productId;
    private Long memberId;
    private String createdDatetime;
    private String updatedDatetime;
}
