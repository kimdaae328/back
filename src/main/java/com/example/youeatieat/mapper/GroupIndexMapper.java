package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.GroupIndexVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface GroupIndexMapper {
//    그룹 인덱스 생성
    public void insertGroupIndex(GroupIndexVO groupIndexVO);

//    해당 상품 그룹인덱스 조회
    public Long  selectGroupIndex(Long productId);
}
