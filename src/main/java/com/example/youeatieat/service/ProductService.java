package com.example.youeatieat.service;

import com.example.youeatieat.dto.ProductCriteriaDTO;
import com.example.youeatieat.dto.ProductDTO;
import com.example.youeatieat.util.Search;

import java.util.Optional;

public interface ProductService {
    //    목록 조회
    public ProductCriteriaDTO getList(int page, Search search);

    //    아이디로 목록 조회(목록에서 상세로 이동)
    public Optional<ProductDTO> goDetail(Long id);

//    상품 개수 조회
    public int getCount(Search search);
}