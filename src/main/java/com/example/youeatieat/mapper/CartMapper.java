package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.CartVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CartMapper {
//    장바구니 추가
    public void insertCart(CartVO cartVO);

    public List<CartVO> selectCartByMemberId(Long memberId);

}
