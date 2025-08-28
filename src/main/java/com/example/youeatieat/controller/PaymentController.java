package com.example.youeatieat.controller;

import com.example.youeatieat.common.exception.NoProductException;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.dto.NoticeDTO;
import com.example.youeatieat.dto.ProductDTO;
import com.example.youeatieat.service.NoticeServiceImpl;
import com.example.youeatieat.service.ProductServiceImpl;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/payment/**")
public class PaymentController {

    private final HttpSession session;


    //   결제 창
    @GetMapping("list")
    public String payment(Model model) {
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("member");
        model.addAttribute("member", memberDTO);
        System.out.println(memberDTO);
        return "/together-product/payment";
    }


    //   결제 완료창
    @GetMapping("payment-ok")
    public String paymentOk(Model model) {
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("member");
        model.addAttribute("member", memberDTO);
        return "/together-product/payment-ok";
    }


}
