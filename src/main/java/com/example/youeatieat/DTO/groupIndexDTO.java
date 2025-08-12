package com.example.youeatieat.DTO;

import com.example.youeatieat.enumeration.CancelableStatus;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;


@Component
@Getter
@ToString @Setter
@EqualsAndHashCode(of = "id")
public class groupIndexDTO {
    private Long id;
    private Long groupIndexNumber;
    private Long productId;
}
