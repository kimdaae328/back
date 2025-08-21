package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.ReviewDTO;
import com.example.youeatieat.util.Criteria;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface ReviewMapper {
//    리뷰 전체 가져오기
    public List<ReviewDTO> selectActiveReview(@Param("criteria") Criteria criteria, @Param("productId") Long id);

//    리뷰 전체 개수
    public int countActiveReview(Long id);

//    아이디로 리뷰 찾기
    public Optional<ReviewDTO> selectReviewById(@Param("id") Long id);
}
