package com.example.youeatieat.service;

import com.example.youeatieat.dto.ReviewImageDTO;

import java.util.List;

public interface ReviewImageService {
    //    리뷰 이미지 가져오기
    public List<ReviewImageDTO> getReviewImages(Long reviewId);

}
