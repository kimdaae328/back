package com.example.youeatieat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/**")
public class AdminController {

//    메인
//    @GetMapping
//    public String adminPage(){
//        return "admin/main/main";
//    }

//    회원목록
    @GetMapping
    public String adminPage(){
        return "admin/customer/list";
    }

//    판매자목록
//    @GetMapping
//    public String adminPage(){
//        return "admin/seller/list";
//    }

}

