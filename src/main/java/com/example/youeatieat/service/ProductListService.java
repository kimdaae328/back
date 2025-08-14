package com.example.youeatieat.service;

import com.example.youeatieat.dto.ProductDTO;
import com.example.youeatieat.repository.ProductDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Primary
public class ProductListService {
    private final ProductDAO productDAO;

    //    목록 조회
    public List<ProductDTO> getList() { return productDAO.getList(); }

    //    아이디로 목록 조회(목록에서 상세로 이동)
    public Optional<ProductDTO> goDetail(Long id) { return productDAO.goDetail(id); }
}
