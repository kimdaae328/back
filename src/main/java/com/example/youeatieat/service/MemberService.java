package com.example.youeatieat.service;


import com.example.youeatieat.domain.AddressVO;
import com.example.youeatieat.domain.MemberVO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.repository.MemberDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface MemberService {
//    추가
    public void join(MemberDTO memberDTO);

    public boolean isExistMemberEmail(String memberEmail);

    public Optional<MemberDTO> login (MemberDTO memberDTO);

    default AddressVO toAddressVO(MemberDTO memberDTO){
        return AddressVO.builder()
                .id(memberDTO.getId())
                .address(memberDTO.getAddress())
                .addressDetail(memberDTO.getAddressDetail())
                .addressPostNumber(memberDTO.getAddressPostNumber())
                .memberId(memberDTO.getId())
                .build();
    }
    default MemberVO toMemberVO(MemberDTO memberDTO){
        return MemberVO.builder()
                .memberEmail(memberDTO.getMemberEmail())
                .memberPassword(memberDTO.getMemberPassword())
                .memberName(memberDTO.getMemberName())
                .memberPhone(memberDTO.getMemberPhone())
                .memberBirth(memberDTO.getMemberBirth())
                .memberGender(memberDTO.getMemberGender())
                .memberRole(memberDTO.getMemberRole())
                .memberStatus(memberDTO.getMemberStatus())
                .build();
    }

}
