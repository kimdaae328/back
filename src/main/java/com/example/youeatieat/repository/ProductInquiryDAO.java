package com.example.youeatieat.repository;


import com.example.youeatieat.domain.ProductInquiryVO;
import com.example.youeatieat.dto.ProductInquiryDTO;
import com.example.youeatieat.mapper.ProductInquiryMapper;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ProductInquiryDAO {
    private final ProductInquiryMapper productInquiryMapper;

//    문의하기
    public void insertInquire(ProductInquiryVO productInquiryVO) {productInquiryMapper.insertProductInquiry(productInquiryVO);}

//    문의목록 조회
    public List<ProductInquiryDTO> selectInquiryByProductId(Criteria criteria, Long productId) {return productInquiryMapper.selectAllProductInquiry(criteria, productId);}

//    문의 개수 조회
    public int getAllCount(Long id) {return productInquiryMapper.countActiveProductInquiry(id);}
}
