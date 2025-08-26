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
    @PostMapping("/update")
    @ResponseBody
    public ResponseEntity<?> updateCount(@RequestBody Map<String, Integer> request){

        int count = request.get("cartCount");
        Long cartId = Long.valueOf(request.get("cartId"));
        cartService.updateCartCount(cartId,count);
        MemberDTO member = (MemberDTO) session.getAttribute("member");
        List<CartDTO> list = cartService.getCartListByMemberId(member.getId());
        int totalPrice = list.stream()
                .mapToInt(cart -> cart.getProductPrice() * cart.getCartCount())
                .sum();
        Map<String, Object> response = new HashMap<>();
        response.put("cartId", cartId);
        response.put("cartCount", count);
        response.put("totalPrice", totalPrice);
        return ResponseEntity.ok(response);
    }
    @PostMapping("/delete")
    @ResponseBody
    public ResponseEntity<?> deleteCart(@RequestBody Map<String, String> request){

        Long cartId = Long.valueOf(request.get("cartId"));
        cartService.deleteCartByCartId(cartId);
        log.info("delete cart id is {}", cartId);
        MemberDTO member = (MemberDTO) session.getAttribute("member");
        List<CartDTO> list = cartService.getCartListByMemberId(member.getId());
        int totalPrice = list.stream()
                .mapToInt(cart -> cart.getProductPrice() * cart.getCartCount())
                .sum();
        Map<String, Object> response = new HashMap<>();
        response.put("cartId", cartId);
        response.put("totalPrice", totalPrice);
        return ResponseEntity.ok(response);
    }
    @PostMapping("/select-delete")
    @ResponseBody
    public ResponseEntity<?> deleteSelectedCart(@RequestBody Map<String, List<Long>> request) {
        List<Long> cartIds = request.get("cartIds");
        cartIds.forEach(cartService::deleteCartByCartId);
        MemberDTO member = (MemberDTO) session.getAttribute("member");
        List<CartDTO> list = cartService.getCartListByMemberId(member.getId());
        int totalPrice = list.stream()
                .mapToInt(cart -> cart.getProductPrice() * cart.getCartCount())
                .sum();
        Map<String, Object> response = new HashMap<>();
        response.put("deletedIds", cartIds);
        response.put("totalPrice", totalPrice);

        return ResponseEntity.ok(response);
    }

}
