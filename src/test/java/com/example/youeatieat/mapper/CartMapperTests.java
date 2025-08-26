package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.service.CartService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@Slf4j
@SpringBootTest
public class CartMapperTests {
    @Autowired
    private CartService cartService;
    @Autowired
    private CartMapper cartMapper;
    @Autowired
    private MemberDTO memberDTO;
    @Test
    void CartMapperTest(){
       Long memberId  = 32L;
        List<CartDTO> List  = cartService.getCartListByMemberId(memberId);
        log.info(List.toString());
    }
}
