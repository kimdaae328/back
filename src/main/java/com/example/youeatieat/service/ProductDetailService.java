package com.example.youeatieat.service;

import com.example.youeatieat.domain.CartVO;
import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.dto.LikeDTO;
import com.example.youeatieat.repository.CartDAO;
import com.example.youeatieat.repository.LikeDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Primary
public class ProductDetailService implements ProductDetailInterface{
    private final CartDAO cartDAO;
    private final LikeDAO likeDAO;

//    장바구니 추가
    public void addCart(CartDTO cartDTO){
        cartDAO.addCart(toVO(cartDTO));
    }

//   찜 하기
    public void like(LikeDTO likeDTO) {likeDAO.likeProduct(toVO(likeDTO));}

//    찜 취소
    public void unlike(LikeDTO likeDTO) {likeDAO.unlikeProduct(likeDTO);}

//    찜 상태
    public boolean getLike(LikeDTO likeDTO) {return likeDAO.getLike(likeDTO);}

}
