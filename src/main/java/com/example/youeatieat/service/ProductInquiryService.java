package com.example.youeatieat.service;

import com.example.youeatieat.domain.ProductInquiryVO;
import com.example.youeatieat.dto.ProductInquiryCriteriaDTO;
import com.example.youeatieat.dto.ProductInquiryDTO;
import com.example.youeatieat.util.Criteria;

import java.util.List;

public interface ProductInquiryService {
//    문의 추가
    public void toInquire (ProductInquiryDTO productInquiryDTO);

//    문의 전체 조회
    public ProductInquiryCriteriaDTO getProductInquiryAll(int page, Long id);

//    문의 전체 개수 조회
    public int getListCount(Long id);

    default ProductInquiryVO toVO (ProductInquiryDTO productInquiryDTO) {
        return ProductInquiryVO.builder()
                .productInquiryContent(productInquiryDTO.getProductInquiryContent())
                .productInquiryTitle(productInquiryDTO.getProductInquiryTitle())
                .productId(productInquiryDTO.getProductId())
                .memberId(productInquiryDTO.getMemberId())
                .build();
    }

}
