package com.example.youeatieat.domain;

import com.example.youeatieat.audit.Period;
import com.example.youeatieat.enumeration.MemberGender;
import com.example.youeatieat.enumeration.MemberRole;
import com.example.youeatieat.common.enumeration.Provider;
import com.example.youeatieat.common.enumeration.Status;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Getter @ToString(callSuper = true)
@SuperBuilder
@EqualsAndHashCode(of="id")
public class MemberVO extends Period {
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
    private String memberLastLoginDate;
}
