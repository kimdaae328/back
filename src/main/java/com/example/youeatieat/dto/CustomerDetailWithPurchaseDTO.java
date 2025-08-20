package com.example.youeatieat.dto;

import com.example.youeatieat.enumeration.MemberGender;
import com.example.youeatieat.enumeration.Status;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(of="id")
public class CustomerDetailWithPurchaseDTO {
    private Long id;
    private String memberEmail;
    private String memberPassword;
    private String memberName;
    private String memberBirth;
    private String memberPhone;
    private MemberGender memberGender;
    private Status memberStatus;
    private String memberLastLoginDate;
    private String createdDate;
    private String updatedDate;

    private Long addressId;
    private String address;
    private String addressDetail;
    private String addressPostNumber;
    private String addressStatus;

    private List<PurchaseRequestDTO> purchase;

    private PaymentCalculateDTO paymentCalculate;

}
