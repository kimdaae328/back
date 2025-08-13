package com.example.youeatieat.dto;

import com.example.youeatieat.enumeration.MemberGender;
import com.example.youeatieat.enumeration.MemberRole;
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
public class MemberDTO {
    private Long id;
    private String memberEmail;
    private String memberPassword;
    private String memberName;
    private String memberBirth;
    private String memberPhone;
    private Provider provider;
    private MemberGender memberGender;
    private MemberRole memberRole;
    private Status memberStatus;
    private String createdDatetime;
    private String updatedDatetime;
}
