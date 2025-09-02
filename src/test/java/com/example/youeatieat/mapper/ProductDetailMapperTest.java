package com.example.youeatieat.mapper;


import com.example.youeatieat.domain.CartVO;
import com.example.youeatieat.domain.LikeVO;
import com.example.youeatieat.dto.LikeDTO;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
@Slf4j
public class ProductDetailMapperTest {
    @Autowired
    private CartMapper cartMapper;

    @Autowired
    private LikeMapper likeMapper;

    //    상품 추가(사용 x)
//    @Test
//    public void testInsertProduct(){
//        CartVO cartVO = CartVO.builder()
//                .cartCount(1).memberId(2L).productId(3L)
//               .build();
//        cartMapper.insertCart(cartVO);
//    }

//    찜
//    @Test
//    public void testInsertLike(){
//        LikeVO likeVO = LikeVO.builder().memberId(2L).productId(1L).build();
//        likeMapper.insertLike(likeVO);
//    }

//    찜 취소

//    찜 조회
//    @Test
//    public void testFindLikeById(){
//        log.info(likeMapper.likeStatus(1L).toString());
//    }

}
