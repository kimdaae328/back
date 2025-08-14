package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.CartVO;
import com.example.youeatieat.dto.ProductDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CartMapper {
//    장바구니 추가
    public void insertCart(CartVO cartVO);

}
