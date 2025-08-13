package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.CartVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ProductDetailMapper {
//    장바구니 추가
    public void insertCart(CartVO cartVO);
}
