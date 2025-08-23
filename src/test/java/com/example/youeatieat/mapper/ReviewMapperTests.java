package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.ReviewDTO;
import com.example.youeatieat.util.Criteria;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@Slf4j
public class ReviewMapperTests {

    @Autowired
    public ReviewMapper reviewMapper;

    @Test
    public void testSelectActiveReview() {
        Criteria criteria = new Criteria(1, 20);
        log.info("Criteria: {}", criteria);

        List<ReviewDTO> reviews = reviewMapper.selectActiveReview(criteria, 2L);

        log.info("조회된 리뷰 개수 = {}", reviews.size());

//        for (ReviewDTO dto : reviews) {
//            log.info("id={}, member={}, content={}, reviewStatus={}, imageUrl={}, imageStatus={}, created={}, updated={}",
//                    dto.getId(),
//                    dto.getMemberName() != null ? dto.getMemberName() : "",
//                    dto.getReviewContent() != null ? dto.getReviewContent() : "",
//                    dto.getReviewStatus() != null ? dto.getReviewStatus() : "",
//                    dto.getReviewImageUrl() != null ? dto.getReviewImageUrl() : "",
//                    dto.getReviewImageStatus() != null ? dto.getReviewImageStatus() : "",
//                    dto.getCreatedDate() != null ? dto.getCreatedDate() : "",
//                    dto.getUpdatedDate() != null ? dto.getUpdatedDate() : ""
//            );
//        }
    }
}
