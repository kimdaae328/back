package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.repository.MemberDAO;
import com.example.youeatieat.service.MemberServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
@Slf4j
public class MemberMapperTests {
    @Autowired
    private MemberMapper memberMapper;
    @Autowired
    private MemberDAO memberDAO;
    @Autowired
    private MemberDTO memberDTO;
    @Autowired
    MemberServiceImpl memberServiceImpl;
//    (#{memberEmail},#{memberPassword},#{memberName},#{memberBirth},#{memberPhone},#{memberGender})
    @Test
   public void testInsertMember() {
        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setMemberEmail("test1234");
        memberDTO.setMemberPassword("12345");
        memberDTO.setMemberName("test");
        memberDTO.setMemberPhone("123456789");
        memberServiceImpl.join(memberDTO);


    }
    @Test
    public void testexistMemberEmail(){
        boolean isExist = memberMapper.existMemberEmail("135125rr");
        log.info("isExist:{}",isExist);
    }
    @Test
    public void testselectMemberForLogin(){
        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setMemberEmail("135125");
        memberDTO.setMemberPassword("1234");
        Optional<MemberDTO> foundMember = memberMapper.selectMemberForLogin(memberDTO);
        foundMember.ifPresent((member)->{
            log.info("member:{}",member);
        });
    }
    @Test
    public void kakaoLoginTest(){
//        memberMapper.selectMemberByKakaoEmail("test1234@kakao.com");
        Optional<MemberDTO> member = memberDAO.findMemberByKakaoEmail("joyssung1101@naver.com");
        log.info(member.toString());
//
//        memberServiceImpl.getKakaoMember("joyssung1101@naver.com");
//        log.info("kakaoLoginTest:{}",memberDTO.getMemberName());


    }
}
