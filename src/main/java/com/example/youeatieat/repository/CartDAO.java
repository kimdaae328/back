package com.example.youeatieat.repository;

import com.example.youeatieat.domain.CartVO;
import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.dto.ProductDTO;
import com.example.youeatieat.mapper.CartMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class CartDAO {
    private final CartMapper cartMapper;

    //    장바구니 추가
    public void addCart(CartVO cartVO) {
        cartMapper.insertCart(cartVO);
    }
}
