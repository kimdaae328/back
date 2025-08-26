package com.example.youeatieat.service;

import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.mapper.CartMapper;
import com.example.youeatieat.repository.CartDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Primary
public class CartServiceImpl implements CartService {
    @Autowired
    private final CartDAO cartDAO;
    @Autowired
    private final CartMapper cartMapper;

    @Override
    public void addCart(CartDTO cartDTO) {
            cartDAO.addCart(toVO(cartDTO));
    }

    @Override
    public List<CartDTO> getCartListByMemberId(Long memberId) {
        return cartDAO.getCartByMemberId(memberId);
    }

    @Override
    public List<CartDTO> getDuplicateProduct(Long memberId, Long productId) {
        return cartDAO.getDuplicateProduct(memberId, productId);
    }

    @Override
    public void updateDuplicateProduct(Long cartId, int cartCount) {
        cartDAO.updateDuplicateProduct(cartId, cartCount);
    }

    @Override
    public void updateCartCount(Long cartId, int cartCount) {
        cartDAO.updateCartCount(cartId, cartCount);
    }

    @Override
    public void deleteCartByCartId(Long cartId) {
        cartDAO.deleteCartByCartId(cartId);
    }

}
