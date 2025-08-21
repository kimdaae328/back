package com.example.youeatieat.service;

import com.example.youeatieat.domain.ProductInquiryVO;
import com.example.youeatieat.dto.ProductInquiryAnswerDTO;
import com.example.youeatieat.dto.ProductInquiryCriteriaDTO;
import com.example.youeatieat.dto.ProductInquiryDTO;

import java.util.Optional;

public interface ProductInquiryAnswerService {

//    문의 답변 조회
    public Optional<ProductInquiryAnswerDTO> selectAnswerById(Long id);


}
