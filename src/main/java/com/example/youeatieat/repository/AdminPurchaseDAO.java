package com.example.youeatieat.repository;

import com.example.youeatieat.dto.InquiryAnswerDTO;
import com.example.youeatieat.dto.InquiryWithAnswerDTO;
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

//    문의 목록(전체)
    public List<PurchaseRequestWithMemberDTO> findPurchaseAll(Criteria criteria){
        return purchaseMapper.selectPurchaseAll(criteria);
    }

//    문의 조회(전쳬)
    public int findPurchaseCountAll(){
        return purchaseMapper.selectPurchaseCountAll();
    }

////    문의 상세
//    public InquiryWithAnswerDTO findInquiryDetail(Long inquiryId) {
//        return inquiryMapper.selectInquiryDetail(inquiryId);
//    }
//

}
