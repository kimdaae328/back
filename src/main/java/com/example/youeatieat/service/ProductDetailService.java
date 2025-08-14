package com.example.youeatieat.service;

import com.example.youeatieat.domain.CartVO;
import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.repository.CartDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Primary
public class ProductDetailService implements ProductDetailInterface{
    private final CartDAO cartDAO;

//    장바구니 추가
    public void addCart(CartDTO cartDTO){
        cartDAO.addCart(toVO(cartDTO));
    }


}
