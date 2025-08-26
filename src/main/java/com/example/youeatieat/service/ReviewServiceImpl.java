package com.example.youeatieat.service;

import com.example.youeatieat.dto.ReviewCriteriaDTO;
import com.example.youeatieat.dto.ReviewDTO;
import com.example.youeatieat.repository.ReviewDAO;
import com.example.youeatieat.repository.ReviewImageDAO;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Primary
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    private final ReviewDAO reviewDAO;
    @Autowired
    private final ReviewImageDAO reviewImageDAO;

    @Override
    public ReviewCriteriaDTO getReview(int page,Long id) {
        ReviewCriteriaDTO reviewCriteriaDTO = new ReviewCriteriaDTO();
        Criteria criteria = new Criteria(page, reviewDAO.countReview(id));
        List<ReviewDTO> reviews = reviewDAO.findAll(criteria, id);

        criteria.setHasMore(reviews.size() > criteria.getRowCount());
//        11개 가져왔으면, 마지막 1개 삭제
        if(criteria.isHasMore()){
            reviews.remove(reviews.size() - 1);
        }

//        리뷰 사진 여러개 가져오기
        reviews.forEach(reviewDTO -> {
            reviewDTO.setImages(reviewImageDAO.findImagesByReviewId(reviewDTO.getId()));
        });

        reviewCriteriaDTO.setReviews(reviews);
        reviewCriteriaDTO.setCriteria(criteria);

        return reviewCriteriaDTO;

    }

    @Override
    public int countReview(Long id) {
        return reviewDAO.countReview(id);
    }

    @Override
    public Optional<ReviewDTO> selectReviewById(Long id) {
        return reviewDAO.findByid(id);
    }
}
