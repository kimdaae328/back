package com.example.youeatieat.repository;


import com.example.youeatieat.domain.ProductInquiryVO;
import com.example.youeatieat.dto.ProductInquiryAnswerDTO;
import com.example.youeatieat.dto.ProductInquiryDTO;
import com.example.youeatieat.mapper.ProductInquiryAnswerMapper;
import com.example.youeatieat.mapper.ProductInquiryMapper;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ProductInquiryAnswerDAO {
    private final ProductInquiryAnswerMapper  productInquiryAnswerMapper;
//    문의 답변 조회
    public List<ProductInquiryAnswerDTO> selectAnswerByProductId(Long productId){
        return productInquiryAnswerMapper.selectAnswerById(productId);
    }
}
