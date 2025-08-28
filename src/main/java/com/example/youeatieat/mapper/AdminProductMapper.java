package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.*;
import com.example.youeatieat.util.Criteria;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminProductMapper {
//    목록(전쳬)
    public List<ProductDTO> selectProductAll(@Param("criteria") Criteria criteria, @Param("keyword") String keyword);

//    전체 개수 조회(전체)
    public int selectCountAll(@Param("keyword") String keyword);

}
