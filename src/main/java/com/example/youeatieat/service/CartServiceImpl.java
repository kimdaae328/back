package com.example.youeatieat.service;

import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.repository.CartDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Primary
public class CartServiceImpl implements CartService {
    @Autowired
    private final CartDAO cartDAO;

    @Override
    public void addCart(CartDTO cartDTO) {
            cartDAO.addCart(toVO(cartDTO));
    }
}
