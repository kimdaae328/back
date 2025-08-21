package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.ReviewImageDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ReviewImageMapper {
//    리뷰 이미지 가져오기
    public List<ReviewImageDTO> selectReviewImageByReviewId(@Param("reviewId") Long reviewId);

}
