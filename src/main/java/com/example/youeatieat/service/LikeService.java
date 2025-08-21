package com.example.youeatieat.service;

import com.example.youeatieat.domain.LikeVO;
import com.example.youeatieat.dto.LikeDTO;

public interface LikeService {

    //   찜 하기
    public void like(LikeDTO likeDTO);

    //    찜 취소
    public void unlike(LikeDTO likeDTO);

    //    찜 상태
    public boolean getLike(LikeDTO likeDTO);

    default LikeVO toVO(LikeDTO likeDTO){
        return LikeVO.builder()
                .productId(likeDTO.getProductId())
                .memberId(2L) // 로그인한 사용자 ID
//                .memberId(cartDTO.getMemberId())
                .build();
    }
}
