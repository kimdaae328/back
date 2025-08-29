package com.example.youeatieat.service;

import com.example.youeatieat.domain.MemberVO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.repository.AddressDAO;
import com.example.youeatieat.repository.MemberDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
@Primary
public class MemberServiceImpl implements MemberService {
    private final MemberDAO memberDAO;
    private final AddressDAO addressDAO;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void join(MemberDTO memberDTO) {
        MemberVO vo =toMemberVO (memberDTO);
        memberDAO.save(vo);
        memberDTO.setId(vo.getId());
        addressDAO.save(toAddressVO(memberDTO));
    }

    @Override
    public boolean isExistMemberEmail(String memberEmail) {
        return memberDAO.isExistMemberEmail(memberEmail);
    }

    @Override
    public Optional<MemberDTO> login(MemberDTO memberDTO) {
        return memberDAO.findMemberByEmailAndMemberPassword(memberDTO)
                ;
    }

    @Override
    public Optional<MemberDTO> getKakaoMember(String kakaoEmail) {
        return memberDAO.findMemberByKakaoEmail(kakaoEmail);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void joinKakao(MemberDTO memberDTO) {
        MemberVO vo =toMemberVO (memberDTO);
        memberDAO.kakaoSave(vo);
        memberDTO.setId(vo.getId());
        addressDAO.save(toAddressVO(memberDTO));
    }

}
