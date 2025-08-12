package com.example.youeatieat.controller;


import com.example.youeatieat.mapper.ProductDetailMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/together-product/**")
public class ProductDetailController {

//    private final ProductDetailMapper productDetailMapper;

//    장바구니 추가
    @GetMapping("detail")
    public String detail(){ return "/together-product//detail";}
}
