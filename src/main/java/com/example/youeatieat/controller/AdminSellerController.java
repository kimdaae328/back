package com.example.youeatieat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/seller/**")
public class AdminSellerController {

//    판매자목록
    @GetMapping
    public String sellerList(){
        return "/admin/seller/list";
    }

}

