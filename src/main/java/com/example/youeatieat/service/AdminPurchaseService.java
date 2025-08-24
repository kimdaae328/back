package com.example.youeatieat.service;

import com.example.youeatieat.dto.AdminInquiryCriteriaDTO;
import com.example.youeatieat.dto.AdminPurchaseCriteriaDTO;
import com.example.youeatieat.dto.InquiryAnswerDTO;
import com.example.youeatieat.dto.InquiryWithAnswerDTO;

public interface AdminPurchaseService {
//    문의 목록(전체)
    public AdminPurchaseCriteriaDTO getPurchaseList(int page);

//    회원 상세
//    InquiryWithAnswerDTO getInquiryDetail(Long inquiryId);
}
