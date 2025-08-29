package com.example.youeatieat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/group-index/**")
public class GroupIndexController {
    @GetMapping("add")
    String addGroupIndex(){
        return "addGroupIndex";
    }
}
