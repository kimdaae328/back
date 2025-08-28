package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.GroupIndexVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface GroupIndexMapper {
    public void insertGroupIndex(GroupIndexVO groupIndexVO);
}
