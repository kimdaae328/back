package com.example.youeatieat.repository;

import com.example.youeatieat.dto.RequestWithPaymentDTO;
import com.example.youeatieat.mapper.AdminRequestMapper;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class AdminRequestDAO {
    private final AdminRequestMapper requestMapper;

    //    결제 목록
    public List<RequestWithPaymentDTO> findRequestAll(Criteria criteria, String keyword) {
        return requestMapper.selectRequestAll(criteria, keyword);
    }

    //    전체 개수 조회
    public int findCountAll(String keyword){
        return requestMapper.selectCountAll(keyword);
    }
}
