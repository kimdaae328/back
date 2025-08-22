package com.example.youeatieat.repository;

import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.mapper.MypageMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Slf4j
@Repository
@RequiredArgsConstructor
public class MypageDAO {
    private final MypageMapper mypageMapper;
    public void kakaoMemberUpdate(MemberDTO memberDTO){
        mypageMapper.updateKakaoMember(memberDTO);
    }
    public void memberUpdate(MemberDTO memberDTO){
        mypageMapper.updateMember(memberDTO);
    }
}
