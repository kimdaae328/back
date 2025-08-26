package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.ProductDTO;
import com.example.youeatieat.util.Criteria;
import com.example.youeatieat.util.Search;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface ProductMapper {
//    목록 조회
    public List<ProductDTO> selectList(@Param("criteria") Criteria criteria,
                                       @Param("search") Search search);

//    아이디로 목록 조회(목록에서 상세로 이동)
    public Optional<ProductDTO> selectById(Long id);

//    상품 개수 조회
    public int countProduct(@Param("search") Search search);
}
