package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.ProductInquiryVO;
import com.example.youeatieat.dto.ProductInquiryDTO;
import com.example.youeatieat.util.Criteria;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Slf4j
public class ProductInquiryAnswerTests {
    @Autowired
    ProductInquiryAnswerMapper productInquiryAnswerMapper;

    @Test
    public void selcetTest(){
        System.out.println(productInquiryAnswerMapper.selectAnswerById(2L));
    }

}
