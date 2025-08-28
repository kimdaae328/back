package com.example.youeatieat.repository;

import com.example.youeatieat.dto.SubCategoryDTO;
import com.example.youeatieat.mapper.SubCategoryMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class SubCategoryDAO {
    private final SubCategoryMapper subCategoryMapper;

    public List<SubCategoryDTO> findSubCategory(Long id) {
        return subCategoryMapper.selectByMainCategory(id);
    }
}
