package com.example.youeatieat.repository;

import com.example.youeatieat.domain.RequestVO;
import com.example.youeatieat.dto.RequestDTO;
import com.example.youeatieat.mapper.RequestMapper;
import com.example.youeatieat.util.Criteria;
import com.example.youeatieat.util.MypageSearch;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
@RequiredArgsConstructor
public class RequestDAO {
    private final RequestMapper requestMapper;

    public void addRequest(RequestVO requestVO) {
        requestMapper.insertRequest(requestVO);
    }
    public List<RequestDTO> findAll(Criteria criteria, MypageSearch search){
        return requestMapper.selectAll(criteria, search);
    }
    public int findCountAll(MypageSearch search){
        return requestMapper.selectCountAll(search);
    }
}
