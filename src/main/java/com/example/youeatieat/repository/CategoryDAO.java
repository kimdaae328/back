package com.example.youeatieat.repository;

import com.example.youeatieat.dto.CategoryDTO;
import com.example.youeatieat.mapper.MainCategoryMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class CategoryDAO {
    private final MainCategoryMapper categoryMapper;

//    카테고리 조회
    public List<CategoryDTO> getCategories() {return categoryMapper.selectAll();}

//    카테고리 1개 조회
    public Optional<CategoryDTO> selectCategoryById(Long id) {return categoryMapper.selectCategoryById(id);}

}
