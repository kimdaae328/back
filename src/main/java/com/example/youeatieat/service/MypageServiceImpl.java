package com.example.youeatieat.service;

import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.mapper.MemberMapper;
import com.example.youeatieat.repository.AddressDAO;
import com.example.youeatieat.repository.MypageDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
@Primary
public class MypageServiceImpl implements MypageService {
    private final MypageDAO mypageDAO;
    private final AddressDAO addressDAO;
    private final MemberMapper memberMapper;

    @Override
    public void kakaoMemberUpdate(MemberDTO memberDTO) {
        mypageDAO.kakaoMemberUpdate(memberDTO);

    }
    @Override @Transactional(rollbackFor = Exception.class)
    public void memberUpdate(MemberDTO memberDTO) {
            mypageDAO.memberUpdate(memberDTO);



    }
}
