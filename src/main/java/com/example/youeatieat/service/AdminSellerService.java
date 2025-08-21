package com.example.youeatieat.service;

import com.example.youeatieat.dto.AdminSellerCriteriaDTO;
import com.example.youeatieat.dto.CustomerDetailWithPurchaseDTO;

public interface AdminSellerService {
//    회원 목록(전체)
    public AdminSellerCriteriaDTO getSellerList(int page, String keyword);

    //    회원 상세
    CustomerDetailWithPurchaseDTO getSellerDetail(Long id);

//    회원 목록(일반)
    AdminSellerCriteriaDTO getSellerYoueatieatList(int page, String keyword);

//    회원 목록(카카오)
    AdminSellerCriteriaDTO getSellerKakaoList(int page, String keyword);

}
