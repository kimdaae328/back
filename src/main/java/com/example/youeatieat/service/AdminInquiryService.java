package com.example.youeatieat.service;

import com.example.youeatieat.dto.AdminInquiryCriteriaDTO;
import com.example.youeatieat.dto.InquiryAnswerDTO;
import com.example.youeatieat.dto.InquiryWithAnswerDTO;

public interface AdminInquiryService {
//    문의 목록(전체)
    public AdminInquiryCriteriaDTO getInquiryList(int page, String keyword);

//    문의 목록(미답변)
    AdminInquiryCriteriaDTO getUnansweredList(int page, String keyword);

//    문의 목록(답변완료)
    AdminInquiryCriteriaDTO getAnsweredList(int page, String keyword);

//    회원 상세
    InquiryWithAnswerDTO getInquiryDetail(Long inquiryId);

//    문의 답변 등록
    void writeInquiryAnswer(InquiryAnswerDTO inquiryAnswerDTO);
}
