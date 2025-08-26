package com.example.youeatieat.controller;

import com.example.youeatieat.service.RequestServiceImpl;
import com.example.youeatieat.util.MypageSearch;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/request/**")
@Slf4j
public class RequestController {
    private final RequestServiceImpl requestService;
    @GetMapping("list/{page}")
    public String list(@PathVariable int page, Model model, MypageSearch search){
        if(search.getMonth() != null && search.getMonth().isEmpty()){
            search.setMonth(null);
        }
        model.addAttribute("requestCriteriaDTO", requestService.getList(page, search));
        model.addAttribute("search", search);
        return "/mypage/request";
    }
}
