package com.example.youeatieat.domain;

import com.example.youeatieat.audit.Period;
import com.example.youeatieat.enumeration.ProductCategory;
import com.example.youeatieat.enumeration.PurchaseRequestApproval;
import com.example.youeatieat.enumeration.Status;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Getter @ToString
@SuperBuilder
@EqualsAndHashCode(of="id")
public class PurchaseRequestVO extends Period {
    private Long id;
    private String purchaseRequestProductName;
    private String purchaseRequestDescription;
    private String purchaseRequestCategory;
    private int purchaseRequestQuantityKg;
    private int purchaseRequestProposedPricePerKg;
    private String purchaseRequestCountryOfOrigin;
    private String purchaseRequestDateOfManufacture;
    private String purchaseRequestDetailImg;
    private PurchaseRequestApproval purchaseRequestApprovalStatus;
    private Status purchaseRequestStatus;
    private Long memberId;
}

