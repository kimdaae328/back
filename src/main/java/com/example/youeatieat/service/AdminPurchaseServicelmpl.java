package com.example.youeatieat.service;

import com.example.youeatieat.dto.*;
import com.example.youeatieat.repository.AdminInquiryDAO;
import com.example.youeatieat.repository.AdminPurchaseDAO;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminPurchaseServicelmpl implements AdminPurchaseService {
    private final AdminPurchaseDAO adminPurchaseDAO;

//    문의 목록(전체)
    @Override
    public AdminPurchaseCriteriaDTO getPurchaseList(int page) {
        AdminPurchaseCriteriaDTO purchaseCriteriaDTO = new AdminPurchaseCriteriaDTO();
        Criteria criteria = new Criteria(page, adminPurchaseDAO.findPurchaseCountAll());

        List<PurchaseRequestWithMemberDTO> purchases = adminPurchaseDAO.findPurchaseAll(criteria);

        criteria.setHasMore(purchases.size() > criteria.getRowCount());

        if(criteria.isHasMore()){
            purchases.remove(purchases.size() - 1);
        }

        purchaseCriteriaDTO.setPurchases(purchases);
        purchaseCriteriaDTO.setCriteria(criteria);

        return purchaseCriteriaDTO;
    }

////    문의 상세
//    @Override
//    public InquiryWithAnswerDTO getInquiryDetail(Long inquiryId) {
//        InquiryWithAnswerDTO inquiryDetailWithAnswerDTO = Optional.ofNullable(adminInquiryDAO.findInquiryDetail(inquiryId))
//                .orElseThrow(() -> new RuntimeException("해당 문의을 찾을 수 없습니다."));
//
//        return inquiryDetailWithAnswerDTO;
//    }
//

}