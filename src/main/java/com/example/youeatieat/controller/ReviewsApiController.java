package com.example.youeatieat.controller;

import com.example.youeatieat.common.exception.handler.NotFoundReviewException;
import com.example.youeatieat.dto.LikeDTO;
import com.example.youeatieat.dto.ReviewCriteriaDTO;
import com.example.youeatieat.dto.ReviewDTO;
import com.example.youeatieat.dto.ReviewImageDTO;
import com.example.youeatieat.service.LikeServiceImpl;
import com.example.youeatieat.service.ReviewImageServiceImpl;
import com.example.youeatieat.service.ReviewServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/review/**")
@RequiredArgsConstructor
public class ReviewsApiController {
    private final ReviewServiceImpl reviewService;
    private final ReviewImageServiceImpl reviewImageService;

    //  리뷰 목록
    @GetMapping("/{productId}/reviews/{page}")
    public ResponseEntity<?> getAllReviews(@PathVariable("productId") Long productId, @PathVariable("page") int page) {
        ReviewCriteriaDTO reviewCriteriaDTO = reviewService.getReview(page, productId);
        int count = reviewService.countReview(productId);
        if (reviewCriteriaDTO == null || reviewCriteriaDTO.getReviews().size() == 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(reviewCriteriaDTO);
        }

        reviewCriteriaDTO.getReviews().forEach(review -> {
            List<ReviewImageDTO> images = reviewImageService.getReviewImages(review.getId());
            review.setImages(images);
        });


        reviewCriteriaDTO.setTotalCount(count);
        return ResponseEntity.ok(reviewCriteriaDTO);

    }

    //    리뷰 상세
    @GetMapping("/{reviewId}")
    public ResponseEntity<?> getReviewDetail(@PathVariable Long reviewId) {
        List<ReviewImageDTO> images = reviewImageService.getReviewImages(reviewId);
        Optional<ReviewDTO> review = reviewService.selectReviewById(reviewId);

        if (review.isPresent()) {
            review.get().setImages(images);
        }

        return review.map(ResponseEntity::ok).orElseThrow(NotFoundReviewException::new);
    }


}
