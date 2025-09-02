package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.CartVO;
import com.example.youeatieat.domain.ProductInquiryVO;
import com.example.youeatieat.dto.ProductInquiryDTO;
import com.example.youeatieat.util.Criteria;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Slf4j
public class ProductInquiryTests {
    @Autowired
    ProductInquiryMapper productInquiryMapper;

//    @Test
//    public void insertProductInquiryTest(){
//        ProductInquiryVO productInquiryVO = ProductInquiryVO
//                .builder()
//                .productInquiryTitle("문의합니다.")
//                        .productInquiryContent("이거 맛있나요?")
//                                .productId(2L)
//                                        .memberId(2L)
//                                                .build();
//
//
//        productInquiryMapper.insertProductInquiry(productInquiryVO);
//    }

//    @Test
//    public void selectAllProductInquiryTest(){
//        Criteria criteria = new Criteria(1, 20);
//        log.info("Criteria: {}", criteria);
//        productInquiryMapper.selectAllProductInquiry(criteria, 2L).stream().map(ProductInquiryDTO::toString).forEach(log::info);
//    }
}
