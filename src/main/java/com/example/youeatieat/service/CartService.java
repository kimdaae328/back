package com.example.youeatieat.service;

import com.example.youeatieat.domain.CartVO;
import com.example.youeatieat.dto.CartDTO;

import java.util.List;

public interface CartService {

    public void addCart(CartDTO cartDTO);

    public List<CartVO> getCartListByMemberId(Long memberId);

    default CartVO toVO(CartDTO cartDTO){
        return CartVO.builder()
                .cartCount(cartDTO.getCartCount())
                .productId(cartDTO.getProductId())
                .memberId(cartDTO.getMemberId())
                .build();
    }
}
