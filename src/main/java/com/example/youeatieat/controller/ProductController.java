package com.example.youeatieat.controller;


import com.example.youeatieat.mapper.ProductMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/together-product/**")
public class ProductController {

    private final ProductMapper productMapper;

//    상품 추가 (사용 x)
    @GetMapping("detail")
    public String detail(){ return "/detail";}
}
