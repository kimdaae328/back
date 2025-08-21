package com.example.youeatieat.service;

import com.example.youeatieat.domain.CartVO;
import com.example.youeatieat.dto.CartDTO;

public interface CartService {

    public void addCart(CartDTO cartDTO);

    default CartVO toVO(CartDTO cartDTO){
        return CartVO.builder()
                .cartCount(cartDTO.getCartCount())
                .productId(cartDTO.getProductId())
                .memberId(2L) // 로그인한 사용자 ID
//                .memberId(cartDTO.getMemberId())
                .build();
    }
}
