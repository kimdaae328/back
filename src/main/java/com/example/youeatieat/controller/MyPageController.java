package com.example.youeatieat.controller;

import com.example.youeatieat.dto.MemberDTO;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/mypage")
@Controller
@RequiredArgsConstructor
@Slf4j
public class MyPageController {
    private final MemberDTO memberDTO;
    private final HttpSession session;

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
    @GetMapping("modify")
    public String GoToModify() {
        Object member = session.getAttribute("member");
        log.info("member = {}", member);
        return "/mypage/modify";

    }
}
