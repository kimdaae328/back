package com.example.youeatieat.mapper;


import com.example.youeatieat.common.enumeration.Status;
import com.example.youeatieat.domain.CartVO;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

@SpringBootTest
@Slf4j
public class CartMapperTest {
    @Autowired
    private ProductDetailMapper productDetailMapper;

    //    상품 추가(사용 x)
    @Test
    public void testInsertProduct(){
        CartVO cartVO = CartVO.builder()
                .cartCount(1).memberId(1L).productId(1L)
               .build();
        productDetailMapper.insertCart(cartVO);
    }

}
