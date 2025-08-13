package com.example.youeatieat.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("admin/customer-list/**")
public class CustomerListController {
    @GetMapping("customer-list")
    public String customerList(){
        return "admin/customer-list/customer-list";
    }
}
