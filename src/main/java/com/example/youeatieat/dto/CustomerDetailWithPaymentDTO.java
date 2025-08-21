package com.example.youeatieat.dto;

import com.example.youeatieat.enumeration.MemberGender;
import com.example.youeatieat.enumeration.Provider;
import com.example.youeatieat.enumeration.Status;
import com.example.youeatieat.util.Criteria;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(of="id")
public class CustomerDetailWithPaymentDTO {
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

    private List<PaymentItemDTO> payments;

    private PaymentCalculateDTO paymentCalculate;

//    private Criteria criteria;
}
