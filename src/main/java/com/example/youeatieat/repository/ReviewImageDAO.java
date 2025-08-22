package com.example.youeatieat.repository;

import com.example.youeatieat.dto.ReviewImageDTO;
import com.example.youeatieat.mapper.ReviewImageMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ReviewImageDAO {
    private final ReviewImageMapper reviewImageMapper;

    //    리뷰 이미지 가져오기
    public List<ReviewImageDTO> findImagesByReviewId(Long reviewId) {return reviewImageMapper.selectReviewImageByReviewId(reviewId);}


}
