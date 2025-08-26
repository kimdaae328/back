package com.example.youeatieat.service;

import com.example.youeatieat.domain.CartVO;
import com.example.youeatieat.dto.CartDTO;

import java.util.List;

public interface CartService {

    public void addCart(CartDTO cartDTO);

    public List<CartDTO> getCartListByMemberId(Long memberId);

    public List<CartDTO> getDuplicateProduct(Long memberId, Long productId);

    public void  updateDuplicateProduct (Long cartId, int cartCount);

    public void updateCartCount(Long cartId, int cartCount);


    public void deleteCartByCartId(Long cartId);

    default CartVO toVO(CartDTO cartDTO){
        return CartVO.builder()
                .cartCount(cartDTO.getCartCount())
                .productId(cartDTO.getProductId())
                .memberId(cartDTO.getMemberId())
                .build();
    }
}
