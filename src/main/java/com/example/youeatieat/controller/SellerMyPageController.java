package com.example.youeatieat.controller;

import com.example.youeatieat.service.NoticeServiceImpl;
import com.example.youeatieat.service.ProductServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/mypage-seller/**")
public class SellerMyPageController {

    //   비밀정보 수정 로그인
    @GetMapping("check")
    public String check(Model model) {
        return "mypage-seller/check";
    }

    //   비밀정보 수정
    @GetMapping("modify")
    public String modify(Model model) {
        return "/mypage-seller/modify";
    }

    //   상품 목록
    @GetMapping("product-list")
    public String productList(Model model) {
        return "/mypage-seller/product-list";
    }

    //   판매 목록
    @GetMapping("sales-list")
    public String salesList(Model model) {
        return "/mypage-seller/sales-list";
    }


    //   통계/정산 내역
    @GetMapping("seller-dashboard")
    public String sellerDashboard(Model model) {
        return "/mypage-seller/seller-dashboard";
    }


}
