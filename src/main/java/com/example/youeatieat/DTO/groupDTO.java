package com.example.youeatieat.DTO;

import com.example.youeatieat.audit.Period;
import com.example.youeatieat.enumeration.CancelableStatus;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;
import org.springframework.stereotype.Component;


@Component
@Getter
@ToString @Setter
@EqualsAndHashCode(of = "id")
public class groupDTO {
    private Long groupIndexNumber;
    private Long productId;
    private CancelableStatus groupCancelable;
}
