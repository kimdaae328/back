package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.InquiryAnswerDTO;
import com.example.youeatieat.dto.InquiryWithAnswerDTO;
import com.example.youeatieat.dto.PurchaseRequestDTO;
import com.example.youeatieat.dto.PurchaseRequestWithMemberDTO;
import com.example.youeatieat.util.Criteria;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminPurchaseMapper {
//    매입 목록(전체)
    public List<PurchaseRequestWithMemberDTO> selectPurchaseAll(@Param("criteria") Criteria criteria, @Param("keyword") String keyword);

//    매입 조회(전체)
    public int selectPurchaseCountAll(@Param("keyword") String keyword);

//    매입 상세
    public PurchaseRequestWithMemberDTO selectPurchaseDetail(Long purchaseId);

//    매입 승인 완료 건수
    public int selectApprovedCountAll();

//    매입 승인 상태
    public void updatePurchaseStatus(@Param("id") Long id, @Param("status") String status);

}
