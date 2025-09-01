package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.GroupVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface GroupMapper {
//    그룹 생성
    public void insertGroup(GroupVO groupVO);

//    그룹 주문취소 업데이트
    public void UpdateGroup(@Param("groupIndexNumber") Long groupIndexNumber, @Param("productId") Long productId);

}
