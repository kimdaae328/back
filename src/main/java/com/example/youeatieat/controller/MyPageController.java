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

    @GetMapping("cart")
    public String GoToCart(){
        return "/mypage/cart";
    }
    @GetMapping("like-list")
    public String GoToLike(){
        return "/mypage/like-list";
    }
    @GetMapping("check")
    public String GoToCheck(){
        return "/mypage/check";
    }
    @GetMapping("check/kakao")
    public String kakaoReLogin(){
//        String token = kakaoService.getKakaoAccessToken(code);
//        Optional<MemberDTO> foundMember = kakaoService.getKakaoInfo(token);
//        log.info("#####################"+token);
//        MemberDTO member = foundMember.orElseThrow(RuntimeException::new);
//        MemberDTO sessionMember = (MemberDTO) session.getAttribute("member");
//
//        if(sessionMember.getMemberKakaoEmail().equals(member.getMemberKakaoEmail())){
//            return new RedirectView("/mypage/modify");
//        }
//        else {
//            return new RedirectView("/mypage/check");
//        }
        return "/mypage/kakao-modify";

    }
    @GetMapping("order")
    public String GoToOrder(){
        return "/mypage/order";
    }
    @GetMapping("review-list")
    public String GoToReview(){
        return "/mypage/review-list";
    }
    @GetMapping("order-detail")
    public String GoToOrderDetail() {
        return "/mypage/order-detail";
    }
    @GetMapping("kakao-modify")
    public String GoToKakaoModify() {
        return "/mypage/kakao-modify";
    }
    @PostMapping("kakao-modify")
    public String UpdateKakaoMember(MemberDTO memberDTO) {
        MemberDTO sessionMember = (MemberDTO) session.getAttribute("member");
        sessionMember.setMemberName(memberDTO.getMemberName());
        mypageService.kakaoMemberUpdate(sessionMember);
        session.setAttribute("member", sessionMember);

        log.info(sessionMember.toString());
        return "redirect:/";
    }
}
