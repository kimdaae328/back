package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.CartVO;
import com.example.youeatieat.dto.CartDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface CartMapper {
//    장바구니 추가
    public void insertCart(CartVO cartVO);

    public List<CartDTO> selectCartByMemberId(Long memberId);

    public void deleteCartByCartId (Long cartId);

    public void updateCartCount (@Param("cartId") Long cartId,@Param("cartCount") int cartCount);

    public void updateDuplicateProduct (@Param("cartId") Long cartId, @Param("cartCount") int cartCount);

    public  List<CartDTO> selectDuplicateProduct(@Param("memberId") Long memberId, @Param("productId") Long productId);

//    아이디로 조회
    public Optional<CartDTO> selectCartById(@Param("id") Long id);
}
