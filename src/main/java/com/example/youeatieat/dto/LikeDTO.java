package com.example.youeatieat.dto;

import com.example.youeatieat.common.enumeration.MemberGender;
import com.example.youeatieat.common.enumeration.MemberRole;
import com.example.youeatieat.common.enumeration.Provider;
import com.example.youeatieat.common.enumeration.Status;
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
    private String createdDatetime;
    private String updatedDatetime;
}
