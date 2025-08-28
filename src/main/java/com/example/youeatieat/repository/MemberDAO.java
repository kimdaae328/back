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
    public void save(MemberVO memberVO) {
        memberMapper.insertMember(memberVO);
    }

    public boolean isExistMemberEmail(String memberEmail){
        return memberMapper.existMemberEmail(memberEmail);
    }

    public Optional<MemberDTO> findMemberByEmailAndMemberPassword(MemberDTO memberDTO){
        return memberMapper.selectMemberForLogin(memberDTO);
    }

//    카카오
//    기존 카카오 회원 정보 조회
    public Optional<MemberDTO> findMemberByKakaoEmail(String kakaoEmail){
        return memberMapper.selectMemberByKakaoEmail(kakaoEmail);
}
    public void kakaoSave(MemberVO memberVO) {
        memberMapper.kakaoInsertMember(memberVO);
    }

//   멤버 구독여부 업데이트
public void updateMemberVerified(Long memberId) {
    memberMapper.updateMemberVerified(memberId);

}


}
