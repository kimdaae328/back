package com.example.youeatieat.controller;

import com.example.youeatieat.service.AdminCustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("admin/customer/**")
public class AdminCustomerController {
    private final AdminCustomerService memberService;

    @GetMapping("list/{page}")
    public String customerList(@PathVariable int page, Model model){
        return "admin/customer/list";
    }

}

