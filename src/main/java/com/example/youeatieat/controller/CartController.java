package com.example.youeatieat.controller;

import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.mapper.CartMapper;
import com.example.youeatieat.repository.CartDAO;
import com.example.youeatieat.service.CartService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/cart")
@RequiredArgsConstructor
@Slf4j
public class CartController {
    private final CartService cartService;
    private final HttpSession session;
    private final CartDAO cartDAO;
    private final MemberDTO memberDTO;


    @GetMapping("/cart")
    public String GoToCart(Model model){
        MemberDTO member = (MemberDTO) session.getAttribute("member");
        List<CartDTO> list =  cartService.getCartListByMemberId(member.getId());
        model.addAttribute("cartList", list);
        int totalPrice = list.stream()
                .mapToInt(cart -> cart.getProductPrice() * cart.getCartCount())
                .sum();
        model.addAttribute("totalPrice", totalPrice);
        System.out.println(member);
        return "/mypage/cart";
    }

//    @PostMapping("cart")
//    public String goPayment(@RequestParam("cartIds") List<Long> cartIds, Model model) {
//        MemberDTO member = (MemberDTO) session.getAttribute("member");
//        List<CartDTO> selectedCarts = cartIds.stream()
//                .map(cartDAO::getCartByCartId)
//                .flatMap(Optional::stream)
//                .collect(Collectors.toList());
//
//        System.out.println(selectedCarts);
//        model.addAttribute("selectedCarts", selectedCarts);
//        System.out.println(member);
//        return  "together-product/payment";
//    }

}
