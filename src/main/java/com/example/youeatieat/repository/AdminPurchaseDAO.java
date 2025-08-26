package com.example.youeatieat.repository;

import com.example.youeatieat.dto.InquiryAnswerDTO;
import com.example.youeatieat.dto.InquiryWithAnswerDTO;
import com.example.youeatieat.dto.PurchaseRequestDTO;
import com.example.youeatieat.dto.PurchaseRequestWithMemberDTO;
import com.example.youeatieat.mapper.AdminInquiryMapper;
import com.example.youeatieat.mapper.AdminPurchaseMapper;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class AdminPurchaseDAO {
    private final AdminPurchaseMapper purchaseMapper;

//    매입 목록(전체)
    public List<PurchaseRequestWithMemberDTO> findPurchaseAll(Criteria criteria, String keyword){
        return purchaseMapper.selectPurchaseAll(criteria, keyword);
    }

//    매입 조회(전쳬)
    public int findPurchaseCountAll(String keyword) {
        return purchaseMapper.selectPurchaseCountAll(keyword);
    }

//    매입 상세
    public PurchaseRequestWithMemberDTO findPurchaseDetail(Long purchaseId) {
        return purchaseMapper.selectPurchaseDetail(purchaseId);
    }

//    매입 승인 완료 건수
    public int findApprovedCountAll() {
        return purchaseMapper.selectApprovedCountAll();
    }

//    매입 승인 상태
    public void changePurchaseStatus(Long id, String status) {
        purchaseMapper.updatePurchaseStatus(id, status);
    };

}
