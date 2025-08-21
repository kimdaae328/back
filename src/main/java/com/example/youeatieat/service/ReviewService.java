package com.example.youeatieat.service;

import com.example.youeatieat.dto.ReviewCriteriaDTO;
import com.example.youeatieat.dto.ReviewDTO;
import com.example.youeatieat.util.Criteria;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

public interface ReviewService {
    //    리뷰 전체 가져오기
    public ReviewCriteriaDTO getReview(int page, Long id);

    //    리뷰 전체 개수
    public int countReview(Long id);

    //    아이디로 리뷰 찾기
    public Optional<ReviewDTO> selectReviewById(Long id);
}
