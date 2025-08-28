package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.GroupVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface GroupMapper {
    public void insertGroup(GroupVO groupVO);
}
