package com.example.youeatieat.repository;

import com.example.youeatieat.domain.LikeVO;
import com.example.youeatieat.dto.LikeDTO;
import com.example.youeatieat.mapper.CartMapper;
import com.example.youeatieat.mapper.LikeMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class LikeDAO {
    private final LikeMapper likeMapper;
    private final CartMapper cartMapper;

    //   찜 하기
    public void likeProduct(LikeVO likeVO){likeMapper.insertLike(likeVO);}

//    찜 취소
    public void unlikeProduct(LikeDTO likeDTO){likeMapper.deleteLike(likeDTO);}

//    찜상태
    public boolean getLike(LikeDTO likeDTO){ return likeMapper.likeStatus(likeDTO);}

    public List<LikeDTO> selectLikeByMemberId(Long memberId) {
       return likeMapper.selectLikeByMemberId(memberId);
    }

}
