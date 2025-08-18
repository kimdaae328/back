package com.example.youeatieat.service;

import com.example.youeatieat.common.exception.LoginFailException;
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

        memberDAO.save(memberDTO);
        log.info(memberDTO.toString());
        addressDAO.save(toAddressVO(memberDTO));
    }

    @Override
    public boolean isExistMemberEmail(String memberEmail) {
        return memberDAO.isExistMemberEmail(memberEmail);
    }

    @Override
    public Optional<MemberDTO> login(MemberDTO memberDTO) {
        return memberDAO.findMemberByEmailAndMemberPassword(memberDTO);
    }
}
