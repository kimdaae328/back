package com.example.youeatieat.controller;

import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.repository.MypageDAO;
import com.example.youeatieat.service.KakaoService;
import com.example.youeatieat.service.MypageService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/mypage")
@Controller
@RequiredArgsConstructor
@Slf4j
public class MyPageController {
    private final MemberDTO memberDTO;
    private final HttpSession session;
    private final KakaoService kakaoService;
    private final MypageDAO mypageDAO;
    private final MypageService mypageService;



    @GetMapping("check")
    public String GoToCheck(){
        return "/mypage/check";
    }

    @GetMapping("review-list")
    public String GoToReview(){
        return "/mypage/review-list";
    }
    @GetMapping("order-detail")
    public String GoToOrderDetail() {
        return "/mypage/order-detail";
    }

    @GetMapping("modify")
    public String GoToModify() {
        MemberDTO member = (MemberDTO) session.getAttribute("member");
        if(member.getMemberKakaoEmail()==null){
            return "/mypage/modify";
        }
        else {
            return "/mypage/kakao-modify";
        }
    }
    @GetMapping("subcribe")
    public String GoToSubcribe() {
        return "/mypage/subcribe";
    }
    @PostMapping("kakao-modify")
    public String UpdateKakaoMember(MemberDTO memberDTO) {
        MemberDTO sessionMember = (MemberDTO) session.getAttribute("member");
        sessionMember.setMemberName(memberDTO.getMemberName());
        mypageService.kakaoMemberUpdate(sessionMember);
        return "redirect:/";
    }
    @PostMapping("modify")
    public String UpdateMember(MemberDTO memberDTO) {
        MemberDTO sessionMember = (MemberDTO) session.getAttribute("member");
        sessionMember.setMemberEmail(memberDTO.getMemberEmail());
        sessionMember.setMemberName(memberDTO.getMemberName());
        mypageService.memberUpdate(sessionMember);
        return "redirect:/";
    }
}
