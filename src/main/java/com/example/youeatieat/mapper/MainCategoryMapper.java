package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.CategoryDTO;
import org.apache.ibatis.annotations.Mapper;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Mapper
public interface MainCategoryMapper {
//    목록 조회
    public List<CategoryDTO> selectAll();

//    아이디로 카테고리 조회
    public Optional<CategoryDTO> selectCategoryById(Long id);
}
