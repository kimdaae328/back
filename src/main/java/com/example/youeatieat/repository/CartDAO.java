package com.example.youeatieat.repository;

import com.example.youeatieat.domain.CartVO;
import com.example.youeatieat.mapper.CartMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class CartDAO {
    private final CartMapper cartMapper;

    //    장바구니 추가
    public void addCart(CartVO cartVO) {
        cartMapper.insertCart(cartVO);
    }
    public List<CartVO> getCartByMemberId(Long memberId) {
        return cartMapper.selectCartByMemberId(memberId);
    }
}
