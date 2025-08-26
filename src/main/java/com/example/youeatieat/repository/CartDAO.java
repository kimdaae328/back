package com.example.youeatieat.repository;

import com.example.youeatieat.domain.CartVO;
import com.example.youeatieat.dto.CartDTO;
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
    public List<CartDTO> getCartByMemberId(Long memberId) {
        return cartMapper.selectCartByMemberId(memberId);
    }

    public void updateCartCount (Long cartId,int cartCount) {
        cartMapper.updateCartCount(cartId,cartCount);
    }

    public void updateDuplicateProduct(Long cartId,int cartCount) {
        cartMapper.updateDuplicateProduct(cartId,cartCount);
    }

    public List<CartDTO> getDuplicateProduct(Long memberId, Long productId ) {
       return cartMapper.selectDuplicateProduct(memberId, productId);
    }

    public void deleteCartByCartId(Long cartId) {
        cartMapper.deleteCartByCartId(cartId);
    }
}
