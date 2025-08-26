package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.CategoryDTO;
import com.example.youeatieat.dto.ProductDTO;
import com.example.youeatieat.util.Criteria;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Optional;

@Mapper
public interface CategoryMapper {
//    목록 조회
    public List<CategoryDTO> selectAll();
}
