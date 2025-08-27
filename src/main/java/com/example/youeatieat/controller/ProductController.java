package com.example.youeatieat.controller;

import com.example.youeatieat.common.exception.NoProductException;
import com.example.youeatieat.common.exception.handler.NoCategoryException;
import com.example.youeatieat.dto.*;
import com.example.youeatieat.service.*;
import com.example.youeatieat.util.Search;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/together-product/**")
public class ProductController {
    private final ProductServiceImpl productServiceImpl;
    private final NoticeServiceImpl noticeServiceImpl;
    private final LikeServiceImpl likeServiceImpl;
    private final CategoryServiceImpl categoryServiceImpl;

    private final HttpSession session;

    //   신상품 목록으로 이동
    @GetMapping("list")
    public String list(Model model) {
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("member");
        model.addAttribute("member", memberDTO);
        return "/together-product/list";
    }

//    베스트 목록으로 이동
    @GetMapping("best-list")
    public String bestList() {
    return "/together-product/best-list";
    }

    //    카테고리별 목록으로 이동
    @GetMapping("by-best-list")
    public String byCategoryList(@RequestParam("id") Long id, Model model) {

        CategoryDTO category = categoryServiceImpl.getOneCategories(id).orElseThrow(NoCategoryException::new);
        System.out.println(category.toString());

        if (category.getId() == null) {
            return "redirect:/error";
        }

        model.addAttribute("category", category);

        return "/together-product/by-category-list";
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

        MemberDTO memberDTO = (MemberDTO) session.getAttribute("member");
        model.addAttribute("member", memberDTO);

//        찜 상태 확인
        boolean liked = false;
        if (memberDTO != null) {
            LikeDTO likeDTO = new LikeDTO();
            likeDTO.setMemberId(memberDTO.getId());
            likeDTO.setProductId(product.getId());
            liked = likeServiceImpl.getLike(likeDTO); // true or false
        }
        model.addAttribute("liked", liked);

        return "/together-product/detail";
    }

//    banner

    @GetMapping("banner")
    public String event(Model model) {
        return "/together-product/banner";
    }

}
