package com.example.youeatieat.service;


import com.example.youeatieat.dto.MemberDTO;
import org.springframework.stereotype.Service;

@Service
public interface MypageService {
    public MemberDTO kakaoMemberUpdate(MemberDTO memberDTO);


}
