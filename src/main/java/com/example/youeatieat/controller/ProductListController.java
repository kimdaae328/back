package com.example.youeatieat.controller;

import com.example.youeatieat.common.exception.NoProductException;
import com.example.youeatieat.dto.ProductDTO;
import com.example.youeatieat.service.ProductListService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/together-product/**")
public class ProductListController {


    private final ProductListService productListService;


    //   상품 목록으로 이동
//    @GetMapping("list")
//    public String list(Model model) {
//        List<ProductDTO> products = productListService.getList();
//        model.addAttribute("products", products);
//        return "/together-product/list";
//    }


//    상품 상세로 이동
    @GetMapping("detail")
    public String detail(@RequestParam("id") Long id, Model model) {
        ProductDTO product = productListService.goDetail(id).orElseThrow(NoProductException::new);
        if (product.getId() == null) {
            return "redirect:/error";
        }
        model.addAttribute("product", product);
        return "/together-product/detail";
    }

}
