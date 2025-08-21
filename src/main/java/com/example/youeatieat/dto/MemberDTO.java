package com.example.youeatieat.dto;

import com.example.youeatieat.enumeration.*;
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
    private String address;
    private String addressDetail;
    private String addressPostNumber;
    private Provider provider;
    private MemberGender memberGender;
    private MemberRole memberRole;
    private Status memberStatus;
    private String memberLastLoginDate;
    private String createdDate;
    private String updatedDate;
    private PaymentStatus subscriptionPaymentStatus;
}
