package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.CategoryDTO;
import com.example.youeatieat.dto.SubCategoryDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SubCategoryMapper {
//    목록 조회
    public List<SubCategoryDTO> selectByMainCategory(Long Id);
}
