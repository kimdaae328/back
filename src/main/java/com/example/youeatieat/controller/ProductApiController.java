package com.example.youeatieat.controller;

import com.example.youeatieat.dto.*;
import com.example.youeatieat.service.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/product/**")
@RequiredArgsConstructor
public class ProductApiController {
    private final CartServiceImpl cartService;
    private final LikeServiceImpl likeService;
    private final ReviewServiceImpl reviewService;
    private final ProductInquiryServiceImpl productInquiryService;

    //    장바구니 넣기
    @PostMapping("carts/save")
    public ResponseEntity<?> insertCart(@RequestBody CartDTO cartDTO) {
        int cartCount = cartDTO.getCartCount();
        if (!(cartCount == 0)) {
            cartService.addCart(cartDTO);
        }

        return ResponseEntity.ok().body(cartDTO);
    }

//    찜하기
    @PostMapping("like")
    public ResponseEntity<?> likeProduct(@RequestBody LikeDTO likeDTO) {
        log.info(likeDTO.toString());
        likeDTO.setMemberId(2L);
        likeService.like(likeDTO);
        return ResponseEntity.ok().body(likeDTO);
    }

//    찜 취소하기
    @PostMapping("unlike")
    public ResponseEntity<?> unlikeProduct(@RequestBody LikeDTO likeDTO) {
        likeDTO.setMemberId(2L);
        likeService.unlike(likeDTO);
        return ResponseEntity.ok().body(likeDTO);
    }

//  리뷰 목록
    @GetMapping("/{productId}/reviews/{page}")
    public ResponseEntity<?> getAllReviews(@PathVariable("productId") Long productId, @PathVariable("page") int page) {
        ReviewCriteriaDTO reviewCriteriaDTO = reviewService.getReview(page, productId);
        int count = reviewService.countReview(productId);
        if (reviewCriteriaDTO == null || reviewCriteriaDTO.getReviews().size() == 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(reviewCriteriaDTO);
        }
        reviewCriteriaDTO.setTotalCount(count);
        return ResponseEntity.ok(reviewCriteriaDTO);

    }

//    상품 문의하기
    @PostMapping("/inquiry")
    public ResponseEntity<?> inquiryProduct(@RequestBody ProductInquiryDTO productInquiryDTO) {
        productInquiryDTO.setMemberId(2L);
        productInquiryService.toInquire(productInquiryDTO);

        return ResponseEntity.ok().body(productInquiryDTO);
    }

    //  문의 목록
    @GetMapping("/{productId}/inquiry/{page}")
    public ResponseEntity<?> getAllInquiries(@PathVariable("productId") Long productId, @PathVariable("page") int page) {
        ProductInquiryCriteriaDTO productInquiryCriteriaDTO = productInquiryService.getProductInquiryAll(page, productId);
        if (productInquiryCriteriaDTO == null || productInquiryCriteriaDTO.getProductInquiries().size() == 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(productInquiryCriteriaDTO);
        }
        return ResponseEntity.ok(productInquiryCriteriaDTO);

    }

}
