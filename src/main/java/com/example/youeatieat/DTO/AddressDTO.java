package com.example.youeatieat.DTO;

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
public class AddressDTO {
    private Long id;
    private String address;
    private String addressDetail;
    private String addressPostNumber;
    private Status addressStatus;
    private Long memberId;
    private String createdDatetime;
    private String updatedDatetime;
}
