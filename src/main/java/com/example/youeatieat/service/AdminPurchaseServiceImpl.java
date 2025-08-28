package com.example.youeatieat.service;

import com.example.youeatieat.dto.*;
import com.example.youeatieat.repository.AdminPurchaseDAO;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminPurchaseServiceImpl implements AdminPurchaseService {
    private final AdminPurchaseDAO adminPurchaseDAO;

//     매입(전체)
    @Override
    public AdminPurchaseCriteriaDTO getPurchaseList(int page, String keyword) {
        AdminPurchaseCriteriaDTO purchaseCriteriaDTO = new AdminPurchaseCriteriaDTO();
        Criteria criteria = new Criteria(page, adminPurchaseDAO.findPurchaseCountAll(keyword));

        List<PurchaseRequestWithMemberDTO> purchases = adminPurchaseDAO.findPurchaseAll(criteria, keyword);

        criteria.setHasMore(purchases.size() > criteria.getRowCount());

        if(criteria.isHasMore()){
            purchases.remove(purchases.size() - 1);
        }

        purchaseCriteriaDTO.setPurchases(purchases);
        purchaseCriteriaDTO.setCriteria(criteria);

        return purchaseCriteriaDTO;
    }

//    매입 상세
    @Override
    public PurchaseRequestWithMemberDTO getPurchaseDetail(Long purchaseId) {
        PurchaseRequestWithMemberDTO purchaseRequestDTO = Optional.ofNullable(adminPurchaseDAO.findPurchaseDetail(purchaseId))
                .orElseThrow(() -> new RuntimeException("해당 매입을 찾을 수 없습니다."));

        return purchaseRequestDTO;
    }

//    매입 승인 완료 건수
    @Override
    public int getApprovedCountAll() {
        return adminPurchaseDAO.findApprovedCountAll();
    }

//    매입 승인 상태
    @Override
    public void changeApprovedStatus(Long id, String status) {
        adminPurchaseDAO.changePurchaseStatus(id, status);
    }

}