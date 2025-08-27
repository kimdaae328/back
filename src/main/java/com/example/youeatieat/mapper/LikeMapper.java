package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.LikeVO;
import com.example.youeatieat.dto.LikeDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface LikeMapper {
//    찜 누르기
    public void insertLike(LikeVO likeVO);

//    찜 취소
    public void deleteLike(LikeDTO likeDTO);

//    찜 상태
    public boolean likeStatus(LikeDTO likeDTO);

//    찜 목록
      public List<LikeDTO> selectLikeByMemberId(Long memberId);



}
