package com.example.youeatieat.service;

import com.example.youeatieat.dto.AdminInquiryCriteriaDTO;
import com.example.youeatieat.dto.CustomerDetailWithPaymentDTO;
import com.example.youeatieat.dto.InquiryAnswerDTO;
import com.example.youeatieat.dto.InquiryDetailWithAnswerDTO;

public interface AdminInquiryService {
//    문의 목록
    public AdminInquiryCriteriaDTO getInquiryList(int page);

//    회원 상세
    InquiryDetailWithAnswerDTO getInquiryDetail(Long inquiryId);

    //    문의 답변 등록
    void writeInquiryAnswer(InquiryAnswerDTO inquiryAnswerDTO);
}
