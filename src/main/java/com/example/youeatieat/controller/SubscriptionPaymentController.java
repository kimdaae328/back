package com.example.youeatieat.controller;

import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.dto.SubscriptionPaymentDTO;
import com.example.youeatieat.service.SubscriptionPaymentServiceImpl;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Slf4j
@Controller
@RequestMapping("/subscription/**")
@RequiredArgsConstructor
public class SubscriptionPaymentController {
    private final SubscriptionPaymentServiceImpl subscriptionPaymentService;
    private final HttpSession session;
    @PostMapping("pay")
    public String pay(SubscriptionPaymentDTO subscriptionPaymentDTO, RedirectAttributes redirectAttributes) {
        MemberDTO member =(MemberDTO)session.getAttribute("member");
        if(member.isMemberVerified()){
            return ("/main/body");
        }
        subscriptionPaymentDTO.setMemberId(member.getId());

        subscriptionPaymentService.addSubscriptionPayment(subscriptionPaymentDTO);
        return "/together-product/subscription-ok";
    }

}
