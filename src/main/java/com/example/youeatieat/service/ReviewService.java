package com.example.youeatieat.service;

import com.example.youeatieat.dto.ReviewCriteriaDTO;
import com.example.youeatieat.dto.ReviewDTO;
import com.example.youeatieat.util.Criteria;

import java.util.List;

public interface ReviewService {
    //    리뷰 전체 가져오기
    public ReviewCriteriaDTO getReview(int page, Long id);

    //    리뷰 전체 개수
    public int countReview(Long id);


}
