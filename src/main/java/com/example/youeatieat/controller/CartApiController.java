package com.example.youeatieat.controller;

import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.service.CartServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/carts/**")
@RequiredArgsConstructor
public class CartApiController {
    private final CartServiceImpl cartService;

    //    장바구니 넣기
    @PostMapping("save")
    public ResponseEntity<?> insertCart(@RequestBody CartDTO cartDTO) {
        int cartCount = cartDTO.getCartCount();
        if (!(cartCount == 0)) {
            cartService.addCart(cartDTO);
        }

        return ResponseEntity.ok().body(cartDTO);
    }
}
