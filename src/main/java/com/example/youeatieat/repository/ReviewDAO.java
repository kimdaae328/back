package com.example.youeatieat.repository;

import com.example.youeatieat.dto.ReviewDTO;
import com.example.youeatieat.mapper.ReviewMapper;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ReviewDAO {
    private final ReviewMapper reviewMapper;

    //    리뷰 전체 가져오기
    public List<ReviewDTO> findAll(Criteria criteria, Long id) {return reviewMapper.selectActiveReview(criteria, id);}

    //    리뷰 전체 개수
    public int countReview(Long id) {return reviewMapper.countActiveReview(id);}

}
