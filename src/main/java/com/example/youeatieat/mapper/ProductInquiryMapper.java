package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.ProductInquiryVO;
import com.example.youeatieat.dto.ProductInquiryDTO;
import com.example.youeatieat.util.Criteria;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ProductInquiryMapper {
//    문의 추가
    public void insertProductInquiry(ProductInquiryVO productInquiryVO);

//    문의 조회
    public List<ProductInquiryDTO> selectAllProductInquiry(@Param("criteria") Criteria criteria, @Param("productId") Long id);

//    문의 개수 조회
    public int countActiveProductInquiry(Long id);
}
