package com.example.youeatieat.controller;

import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.service.CartService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/cart")
@RequiredArgsConstructor
@Slf4j
public class CartController {
    private final CartService cartService;
    private final HttpSession session;


    @GetMapping("/cart")
    public String GoToCart(Model model){
        MemberDTO member = (MemberDTO) session.getAttribute("member");
        List<CartDTO> list =  cartService.getCartListByMemberId(member.getId());
        model.addAttribute("cartList", list);
        int totalPrice = list.stream()
                .mapToInt(cart -> cart.getProductPrice() * cart.getCartCount())
                .sum();
        model.addAttribute("totalPrice", totalPrice);
        return "/mypage/cart";
    }

    @PostMapping("cart")
    public String goPayment(@RequestParam List<CartDTO> carts) {
        return  "redirect:/payment/list";
    }

}
