package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.repository.MemberDAO;
import com.example.youeatieat.service.MemberService;
import com.example.youeatieat.service.MemberServiceImpl;
import com.example.youeatieat.service.MypageService;
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
    @Autowired
    MemberService memberService;
    @Autowired
    MypageService mypageService;


//    (#{memberEmail},#{memberPassword},#{memberName},#{memberBirth},#{memberPhone},#{memberGender})
    @Test
   public void testInsertMember() {
        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setMemberEmail("test");
        memberDTO.setMemberPassword("1234");
        Optional<MemberDTO> optionalMember = memberMapper.selectMemberForLogin(memberDTO);
        MemberDTO member = optionalMember.get();
        log.info(member.toString());
        member.setMemberName("수정좀");
        mypageService.memberUpdate(member);
        log.info(member.toString());


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
        Optional<MemberDTO> member= memberService.getKakaoMember("joyssung1101@naver.com");
        member.get().setMemberName("업데이트");
        mypageService.kakaoMemberUpdate(member.get());
        log.info(member.toString());
//
//        memberServiceImpl.getKakaoMember("joyssung1101@naver.com");
//        log.info("kakaoLoginTest:{}",memberDTO.getMemberName());


    }
}
