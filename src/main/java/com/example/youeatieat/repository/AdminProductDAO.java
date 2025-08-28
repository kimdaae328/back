package com.example.youeatieat.repository;

import com.example.youeatieat.dto.*;
import com.example.youeatieat.mapper.AdminCustomerMapper;
import com.example.youeatieat.mapper.AdminProductMapper;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class AdminProductDAO {
    private final AdminProductMapper productMapper;

//    회원 목록(전쳬)
    public List<ProductDTO> findProductAll(Criteria criteria, String keyword) {
        return productMapper.selectProductAll(criteria, keyword);
    }

//    전체 개수 조회
    public int findCountAll(String keyword){
        return productMapper.selectCountAll(keyword);
    }

}
