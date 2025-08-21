package com.example.youeatieat.controller;

import com.example.youeatieat.common.exception.NoProductException;
import com.example.youeatieat.dto.NoticeDTO;
import com.example.youeatieat.dto.ProductDTO;
import com.example.youeatieat.dto.ReviewDTO;
import com.example.youeatieat.dto.ReviewImageDTO;
import com.example.youeatieat.service.NoticeServiceImpl;
import com.example.youeatieat.service.ProductServiceImpl;
import com.example.youeatieat.service.ReviewImageServiceImpl;
import com.example.youeatieat.service.ReviewServiceImpl;
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
public class ProductController {


    private final ProductServiceImpl productServiceImpl;
    private final NoticeServiceImpl noticeServiceImpl;
    private final ReviewImageServiceImpl reviewImageServiceImpl;


    //   상품 목록으로 이동
    @GetMapping("list")
    public String list(Model model) {
        List<ProductDTO> products = productServiceImpl.getList();
        model.addAttribute("products", products);
        return "/together-product/list";
    }


//    상품 상세로 이동
    @GetMapping("detail")
    public String detail(@RequestParam("id") Long id, Model model) {
        ProductDTO product = productServiceImpl.goDetail(id).orElseThrow(NoProductException::new);
        if (product.getId() == null) {
            return "redirect:/error";
        }
//        상품 조회
        model.addAttribute("product", product);
        List<NoticeDTO> notices = noticeServiceImpl.findAll();
        model.addAttribute("notices", notices);

        return "/together-product/detail";
    }

}
