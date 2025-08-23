package com.example.youeatieat.service;

import com.example.youeatieat.domain.CartVO;
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
    public List<CartVO> getCartListByMemberId(Long memberId) {
        return cartDAO.getCartByMemberId(memberId);
    }
}
