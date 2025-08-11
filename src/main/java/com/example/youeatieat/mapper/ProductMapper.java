package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.ProductVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ProductMapper {
//    추가(사용 x)
    public void insertProduct(ProductVO productVO);
}
