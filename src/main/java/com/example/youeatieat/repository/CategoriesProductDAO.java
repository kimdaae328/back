package com.example.youeatieat.repository;

import com.example.youeatieat.dto.ProductDTO;
import com.example.youeatieat.mapper.BestProductMapper;
import com.example.youeatieat.mapper.CategoriesProductMapper;
import com.example.youeatieat.util.Criteria;
import com.example.youeatieat.util.Search;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
@Slf4j
public class CategoriesProductDAO {
     private final CategoriesProductMapper categoriesProductMapper;

    //    목록 조회
    public List<ProductDTO> getList(Criteria criteria, Search search, Long id) {
        return categoriesProductMapper.selectList(criteria, search, id);
    }

    //    아이디로 목록 조회(목록에서 상세로 이동)
    public Optional<ProductDTO> goDetail(Long id) { return categoriesProductMapper.selectById(id); }

//    상품 개수 조회
    public int countProduct(Search search, Long id) {
        log.info(search.toString());
        return categoriesProductMapper.countProduct(search, id);
    }
}
