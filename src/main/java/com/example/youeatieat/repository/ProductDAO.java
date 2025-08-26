package com.example.youeatieat.repository;

import com.example.youeatieat.dto.ProductDTO;
import com.example.youeatieat.mapper.ProductMapper;
import com.example.youeatieat.util.Criteria;
import com.example.youeatieat.util.Search;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class ProductDAO {
     private final ProductMapper productMapper;

    //    목록 조회
    public List<ProductDTO> getList(Criteria criteria, Search search) {
        return productMapper.selectList(criteria, search);
    }

    //    아이디로 목록 조회(목록에서 상세로 이동)
    public Optional<ProductDTO> goDetail(Long id) { return productMapper.selectById(id); }

//    상품 개수 조회
    public int countProduct(Search search) {return productMapper.countProduct(search);}
}
