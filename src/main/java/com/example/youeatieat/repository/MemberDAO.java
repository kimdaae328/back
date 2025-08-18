package com.example.youeatieat.repository;

import com.example.youeatieat.domain.MemberVO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Slf4j
@Repository
@RequiredArgsConstructor
public class MemberDAO {
    private final MemberMapper memberMapper;
    public void save(MemberDTO memberDTO) {
        memberMapper.insertMember(memberDTO);
    }
    public boolean isExistMemberEmail(String memberEmail){
        return memberMapper.existMemberEmail(memberEmail);
    }

    public Optional<MemberDTO> findMemberByEmailAndMemberPassword(MemberDTO memberDTO){
        return memberMapper.selectMemberForLogin(memberDTO);
    }


}
