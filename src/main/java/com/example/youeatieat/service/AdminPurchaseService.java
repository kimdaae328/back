package com.example.youeatieat.service;

import com.example.youeatieat.dto.*;

public interface AdminPurchaseService {
//    매입 목록(전체)
    public AdminPurchaseCriteriaDTO getPurchaseList(int page, String keyword);

//    매입 상세
    PurchaseRequestWithMemberDTO getPurchaseDetail(Long purchaseId);

//    매입 승인 완료 건수
    public int getApprovedCountAll();

//    매입 승인 상태
    public void  changeApprovedStatus(Long id, String status);
}
