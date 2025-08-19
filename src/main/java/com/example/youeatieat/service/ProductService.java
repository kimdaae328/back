package com.example.youeatieat.service;

import com.example.youeatieat.dto.ProductDTO;
import com.example.youeatieat.repository.ProductDAO;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    //    목록 조회
    public List<ProductDTO> getList();

    //    아이디로 목록 조회(목록에서 상세로 이동)
    public Optional<ProductDTO> goDetail(Long id);
}