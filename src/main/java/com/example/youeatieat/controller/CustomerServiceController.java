package com.example.youeatieat.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/customerservice")
@RequiredArgsConstructor
@Controller
@Slf4j
public class CustomerServiceController {
    @GetMapping("notice")
    public String GoToNotice() {
        return "/buyer-customer-center/notice";
    }
    @GetMapping("faq")
    public String GoToFaq() {
        return "/buyer-customer-center/faq";
    }
    @GetMapping("inquiry")
    public String GoToInquiry() {
        return "/buyer-customer-center/inquiry";
    }
    @GetMapping("inquiry-enroll")
    public String GoToInquiryEnroll() {
        return "/buyer-customer-center/inquiry-enroll";
    }
}
