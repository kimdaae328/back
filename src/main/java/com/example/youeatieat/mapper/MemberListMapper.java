package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.util.Criteria;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MemberListMapper {

//    목록
    public List<MemberDTO> selectMemberAll(Criteria criteria);
//    전체 개수
    public int selectCountAll();
}
