package com.example.youeatieat.mapper;


import com.example.youeatieat.domain.CartVO;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Slf4j
public class ProductDetailMapperTest {
    @Autowired
    private CartMapper cartMapper;

    //    상품 추가(사용 x)
    @Test
    public void testInsertProduct(){
        CartVO cartVO = CartVO.builder()
                .cartCount(1).memberId(1L).productId(1L)
               .build();
        cartMapper.insertCart(cartVO);
    }

}
