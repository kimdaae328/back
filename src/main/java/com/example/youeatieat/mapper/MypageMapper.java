package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MypageMapper {
//    카카오멤버 정보수정
    public void updateKakaoMember(MemberDTO memberDTO);
}
