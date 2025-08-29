package com.example.youeatieat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/**")
public class AdminController {

//    회원목록
    @GetMapping
    public String adminPage(){
        return "admin/customer/list";
    }


}

