package com.example.youeatieat.repository;

import com.example.youeatieat.dto.CategoryDTO;
import com.example.youeatieat.mapper.CategoryMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class CategoryDAO {
    private final CategoryMapper categoryMapper;

//    카테고리 조회
    public List<CategoryDTO> getCategories() {return categoryMapper.selectAll();}

}
