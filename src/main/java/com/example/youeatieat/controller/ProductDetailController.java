package com.example.youeatieat.controller;

import com.example.youeatieat.domain.CartVO;
import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.mapper.CartMapper;
import com.example.youeatieat.mapper.ProductMapper;
import com.example.youeatieat.service.ProductDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@RestController
@RequestMapping("/api/carts/**")
@RequiredArgsConstructor
public class ProductDetailController {
    private final ProductDetailService productDetailService;

    //    장바구니 넣기
    @PostMapping("save")
    public ResponseEntity<?> insertCart(@RequestBody CartDTO cartDTO) {
        productDetailService.addCart(cartDTO);
        return ResponseEntity.ok().body(cartDTO);
    }

}
