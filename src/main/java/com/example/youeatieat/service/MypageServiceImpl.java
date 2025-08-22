package com.example.youeatieat.service;

import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.repository.AddressDAO;
import com.example.youeatieat.repository.MypageDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
@Primary
public class MypageServiceImpl implements MypageService {
    private final MypageDAO mypageDAO;
    private final AddressDAO addressDAO;

    @Override
    public MemberDTO kakaoMemberUpdate(MemberDTO memberDTO) {
        mypageDAO.kakaoMemberUpdate(memberDTO);

        return memberDTO;
    }
}
