package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.InquiryAnswerDTO;
import com.example.youeatieat.dto.InquiryWithAnswerDTO;
import com.example.youeatieat.dto.PurchaseRequestWithMemberDTO;
import com.example.youeatieat.util.Criteria;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminPurchaseMapper {
//    문의 목록(전체)
    public List<PurchaseRequestWithMemberDTO> selectPurchaseAll(Criteria criteria);

//    문의 조회(전쳬)
    public int selectPurchaseCountAll();

////    문의 상세
//    public InquiryWithAnswerDTO selectInquiryDetail(Long inquiryId);
//
////    문의 답변 등록
//    public void insertInquiryAnswer(InquiryAnswerDTO inquiryAnswerDTO);
//
////    문의 조회(미답변)
//    public int selectUnansweredCountAll();
//
////    문의 조회(답변완료)
//    public int selectAnsweredCountAll();


}
