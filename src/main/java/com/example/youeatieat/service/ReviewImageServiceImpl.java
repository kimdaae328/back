package com.example.youeatieat.service;

import com.example.youeatieat.dto.ReviewImageDTO;
import com.example.youeatieat.repository.ReviewImageDAO;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Primary
public class ReviewImageServiceImpl implements ReviewImageService {
    @Autowired
    private ReviewImageDAO reviewImageDAO;


    @Override
    public List<ReviewImageDTO> getReviewImages(Long reviewId) {
        return reviewImageDAO.findImagesByReviewId(reviewId);
    }
}
