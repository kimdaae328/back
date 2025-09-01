package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.RequestVO;
import com.example.youeatieat.dto.RequestDTO;
import com.example.youeatieat.util.Criteria;
import com.example.youeatieat.util.MypageSearch;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface RequestMapper {
    public void insertRequest(RequestVO requestVO);

    public List<RequestDTO> selectAll(@Param("criteria") Criteria criteria, @Param("search") MypageSearch search);

    public int selectCountAll(@Param("search") MypageSearch search);

    public int selectAmount (@Param("productId") Long productId,@Param("groupIndexId") Long groupIndexNumber);
}
