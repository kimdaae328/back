package com.example.youeatieat.controller;

import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.service.CartServiceImpl;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/carts/**")
@RequiredArgsConstructor
@Slf4j
public class CartApiController {
    private final CartServiceImpl cartService;
    private final HttpSession session;

    //    장바구니 넣기
    @PostMapping("save")
    public ResponseEntity<?> insertCart(@RequestBody CartDTO cartDTO) {
        int cartCount = cartDTO.getCartCount();
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("member");
        Long memberId = memberDTO.getId();
        cartDTO.setMemberId(memberId);
        if (!(cartCount== 0)) {
            cartService.addCart(cartDTO);
        }

        return ResponseEntity.ok().body(cartDTO);
    }
}
