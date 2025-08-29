package com.example.youeatieat.controller;

import com.example.youeatieat.common.exception.NoProductException;
import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.dto.NoticeDTO;
import com.example.youeatieat.dto.ProductDTO;
import com.example.youeatieat.service.CartServiceImpl;
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

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/together-product/**")
public class PaymentController {

    private final CartServiceImpl cartService;
    private final HttpSession session;


    //   결제 창
    @GetMapping("payment")
    public String goPayment(@RequestParam("cartIds") List<Long> cartIds, Model model) {
        MemberDTO member = (MemberDTO) session.getAttribute("member");
        List<CartDTO> selectedCarts = cartIds.stream()
                .map(cartService::getCartById)
                .flatMap(Optional::stream)
                .collect(Collectors.toList());

        System.out.println(selectedCarts);
        model.addAttribute("selectedCarts", selectedCarts);
        model.addAttribute("member", member);
        System.out.println(member);
        return  "together-product/payment";
    }


    //   결제 완료창
    @GetMapping("payment-ok")
    public String paymentOk( Model model) {
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("member");
        model.addAttribute("member", memberDTO);

        return "/together-product/payment-ok";
    }


}
